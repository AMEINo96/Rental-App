import os
from flask import Flask, render_template, request, redirect, url_for, flash
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import sqlite3

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key-here' # Change this in production
# Check if running on Vercel
IS_VERCEL = os.environ.get('VERCEL') == '1'

if IS_VERCEL:
    app.config['UPLOAD_FOLDER'] = '/tmp/uploads'
    DB_NAME = "/tmp/database.db"
else:
    app.config['UPLOAD_FOLDER'] = 'static/uploads'
    DB_NAME = "database.db"

app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Flask-Login setup
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

class User(UserMixin):
    def __init__(self, id, username, password_hash):
        self.id = id
        self.username = username
        self.password_hash = password_hash

@login_manager.user_loader
def load_user(user_id):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    user_data = c.fetchone()
    conn.close()
    if user_data:
        return User(user_data[0], user_data[1], user_data[2])
    return None

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    
    # Create users table
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  username TEXT UNIQUE NOT NULL,
                  password_hash TEXT NOT NULL)''')

    # Create items table (if not exists)
    c.execute('''CREATE TABLE IF NOT EXISTS items
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  title TEXT NOT NULL,
                  description TEXT,
                  price TEXT,
                  condition TEXT,
                  contact_info TEXT,
                  renting_time TEXT,
                  image_filename TEXT,
                  user_id INTEGER,
                  FOREIGN KEY(user_id) REFERENCES users(id))''')
    
    # Check if user_id column exists in items table (migration)
    c.execute("PRAGMA table_info(items)")
    columns = [column[1] for column in c.fetchall()]
    if 'user_id' not in columns:
        c.execute("ALTER TABLE items ADD COLUMN user_id INTEGER REFERENCES users(id)")

    conn.commit()
    conn.close()

init_db()

@app.route('/')
def index():
    query = request.args.get('q')
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    
    if query:
        c.execute("SELECT * FROM items WHERE title LIKE ? OR description LIKE ?", ('%' + query + '%', '%' + query + '%'))
    else:
        c.execute("SELECT * FROM items ORDER BY RANDOM()") # Random items as requested
        
    items = c.fetchall()
    conn.close()
    return render_template('index.html', items=items, search_query=query)

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username'].strip()
        password = request.form['password'].strip()
        
        conn = sqlite3.connect(DB_NAME)
        c = conn.cursor()
        
        try:
            hashed_password = generate_password_hash(password)
            c.execute("INSERT INTO users (username, password_hash) VALUES (?, ?)", (username, hashed_password))
            conn.commit()
            conn.close()
            flash('Account created successfully! Please log in.', 'success')
            return redirect(url_for('login'))
        except sqlite3.IntegrityError:
            conn.close()
            flash('Username already exists.', 'error')
            
    return render_template('signup.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username'].strip()
        password = request.form['password'].strip()
        
        conn = sqlite3.connect(DB_NAME)
        c = conn.cursor()
        c.execute("SELECT * FROM users WHERE username = ?", (username,))
        user_data = c.fetchone()
        conn.close()
        
        if user_data and check_password_hash(user_data[2], password):
            user = User(user_data[0], user_data[1], user_data[2])
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
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT * FROM items WHERE id = ?", (item_id,))
    item = c.fetchone()
    conn.close()
    
    if item:
        return render_template('item_details.html', item=item)
    else:
        return "Item not found", 404

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
        image_filename = ""
        if image and image.filename:
            filename = secure_filename(image.filename)
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            image_filename = filename
            
        conn = sqlite3.connect(DB_NAME)
        c = conn.cursor()
        c.execute("INSERT INTO items (title, description, price, condition, contact_info, renting_time, image_filename, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                  (title, description, price, condition, contact_info, renting_time, image_filename, current_user.id))
        conn.commit()
        conn.close()
        
        return redirect(url_for('index'))
        
    return render_template('upload.html')

@app.route('/my_listings')
@login_required
def my_listings():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT * FROM items WHERE user_id = ?", (current_user.id,))
    items = c.fetchall()
    conn.close()
    return render_template('my_listings.html', items=items)

@app.route('/delete_item/<int:item_id>', methods=['POST'])
@login_required
def delete_item(item_id):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    
    # Verify ownership
    c.execute("SELECT user_id FROM items WHERE id = ?", (item_id,))
    item = c.fetchone()
    
    if item and item[0] == current_user.id:
        c.execute("DELETE FROM items WHERE id = ?", (item_id,))
        conn.commit()
        flash('Item deleted successfully.', 'success')
    else:
        flash('You do not have permission to delete this item.', 'error')
        
    conn.close()
    return redirect(url_for('my_listings'))

if __name__ == '__main__':
    app.run(debug=True)
