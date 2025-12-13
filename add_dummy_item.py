import sqlite3
import os

DB_NAME = "database.db"

def add_dummy_item():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    
    # Ensure a user exists
    c.execute("SELECT id FROM users LIMIT 1")
    user = c.fetchone()
    if not user:
        c.execute("INSERT INTO users (username, password_hash) VALUES (?, ?)", ('testuser', 'pbkdf2:sha256:260000$dummyhash'))
        user_id = c.lastrowid
    else:
        user_id = user[0]

    # Add dummy item
    c.execute("""
        INSERT INTO items (title, description, price, condition, contact_info, renting_time, image_filename, user_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        'Anti-Gravity Boots',
        'Boots that let you walk on the ceiling. Slightly scuffed but fully functional. Warning: do not wear outside without a tether.',
        '$50/day',
        'Good',
        'alien_bob@example.com',
        '1 week',
        '', # No image for now, checking placeholder
        user_id
    ))
    
    conn.commit()
    conn.close()
    print("Dummy item added.")

if __name__ == '__main__':
    add_dummy_item()
