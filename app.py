import os
from flask import Flask, render_template, request, redirect, url_for, flash
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.expression import func
import cloudinary
import cloudinary.uploader
import cloudinary.api

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key-here'  # Change this in production

# Cloudinary Configuration
cloudinary_url = os.environ.get('CLOUDINARY_URL')
if cloudinary_url:
    # If CLOUDINARY_URL is present (vercel or local env), it auto-configures
    pass
else:
    # Fallback or manual config if needed (but we rely on the generic env var)
    pass

# Database Configuration
# Vercel provides POSTGRES_URL, POSTGRES_PRISMA_URL, etc.
# We prefer POSTGRES_URL for SQLAlchemy, but need to ensure it starts with postgresql://
database_url = os.environ.get('POSTGRES_URL') or os.environ.get('DATABASE_URL')
if database_url and database_url.startswith('postgres://'):
    database_url = database_url.replace('postgres://', 'postgresql://', 1)

app.config['SQLALCHEMY_DATABASE_URI'] = database_url or 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Upload Configuration (Fallback if cloudinary fails or for simpler setups)
# We keep this for backward compatibility or local dev without internet
if os.environ.get('VERCEL') == '1':
    app.config['UPLOAD_FOLDER'] = '/tmp/uploads'
else:
    app.config['UPLOAD_FOLDER'] = 'static/uploads'

app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Initialize Extensions
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

# Models
class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    items = db.relationship('Item', backref='owner', lazy=True)

class Item(db.Model):
    __tablename__ = 'items'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.String(50))
    condition = db.Column(db.String(50))
    contact_info = db.Column(db.String(150))
    renting_time = db.Column(db.String(50))
    image_filename = db.Column(db.String(255)) # This will now store URL if uploaded to Cloudinary
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# Or manually call it if before_first_request is deprecated in newer Flask versions you might use
with app.app_context():
    db.create_all()

# Routes

@app.route('/')
def index():
    query = request.args.get('q')
    if query:
        # Search by title or description
        items = Item.query.filter(
            (Item.title.ilike(f'%{query}%')) | 
            (Item.description.ilike(f'%{query}%'))
        ).all()
    else:
        # Random items equivalent
        items = Item.query.order_by(func.random()).all()
    return render_template('index.html', items=items, search_query=query)

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username'].strip()
        password = request.form['password'].strip()
        
        if User.query.filter_by(username=username).first():
            flash('Username already exists.', 'error')
            return redirect(url_for('signup'))
        
        hashed_password = generate_password_hash(password)
        new_user = User(username=username, password_hash=hashed_password)
        
        try:
            db.session.add(new_user)
            db.session.commit()
            flash('Account created successfully! Please log in.', 'success')
            return redirect(url_for('login'))
        except Exception as e:
            db.session.rollback()
            flash(f'Error creating account: {e}', 'error')
            
    return render_template('signup.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username'].strip()
        password = request.form['password'].strip()
        
        user = User.query.filter_by(username=username).first()
        
        if user and check_password_hash(user.password_hash, password):
            login_user(user)
            return redirect(url_for('index'))
        else:
            flash('Invalid username or password.', 'error')
            
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/item/<int:item_id>')
def item_details(item_id):
    item = Item.query.get_or_404(item_id)
    return render_template('item_details.html', item=item)

@app.route('/rent', methods=['GET', 'POST'])
@login_required
def rent():
    if request.method == 'POST':
        title = request.form['title']
        description = request.form['description']
        price = request.form['price']
        condition = request.form['condition']
        contact_info = request.form['contact_info']
        renting_time = request.form['renting_time']
        
        image = request.files['image']
        image_url = "" # Changed from image_filename to be more explicit, but column is still image_filename
        
        if image and image.filename:
            # Check for Cloudinary URL presence
            if os.environ.get('CLOUDINARY_URL'):
                try:
                    upload_result = cloudinary.uploader.upload(image)
                    image_url = upload_result.get('secure_url')
                except Exception as e:
                    print(f"Cloudinary upload failed: {e}")
                    # Fallback to local save if cloudinary fails (or for local testing without key)
                    filename = secure_filename(image.filename)
                    image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                    image_url = filename
            else:
                # Local save only
                filename = secure_filename(image.filename)
                image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                image_url = filename
            
        new_item = Item(
            title=title,
            description=description,
            price=price,
            condition=condition,
            contact_info=contact_info,
            renting_time=renting_time,
            image_filename=image_url, # Now saving URL or filename
            owner=current_user
        )
        
        db.session.add(new_item)
        db.session.commit()
        
        return redirect(url_for('index'))
        
    return render_template('upload.html')

@app.route('/my_listings')
@login_required
def my_listings():
    # item.owner is set via backref, so item.user_id check is implicit
    items = Item.query.filter_by(user_id=current_user.id).all()
    return render_template('my_listings.html', items=items)

@app.route('/delete_item/<int:item_id>', methods=['POST'])
@login_required
def delete_item(item_id):
    item = Item.query.get_or_404(item_id)
    
    if item.user_id == current_user.id:
        db.session.delete(item)
        db.session.commit()
        flash('Item deleted successfully.', 'success')
    else:
        flash('You do not have permission to delete this item.', 'error')
        
    return redirect(url_for('my_listings'))

if __name__ == '__main__':
    app.run(debug=True)
