import sqlite3
import sys

DB_NAME = "database.db"

def list_items():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT id, title, user_id FROM items")
    items = c.fetchall()
    conn.close()
    
    if not items:
        print("No items found in the database.")
        return

    print(f"{'ID':<5} {'Title':<30} {'User ID':<10}")
    print("-" * 50)
    for item in items:
        print(f"{item[0]:<5} {item[1]:<30} {item[2]:<10}")

def delete_item(item_id):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    
    # Check if item exists
    c.execute("SELECT id FROM items WHERE id = ?", (item_id,))
    if not c.fetchone():
        print(f"Item with ID {item_id} not found.")
        conn.close()
        return

    confirm = input(f"Are you sure you want to delete item {item_id}? (y/n): ")
    if confirm.lower() == 'y':
        c.execute("DELETE FROM items WHERE id = ?", (item_id,))
        conn.commit()
        print(f"Item {item_id} deleted successfully.")
    else:
        print("Deletion cancelled.")
    
    conn.close()

def main():
    while True:
        print("\n--- Admin Tools ---")
        print("1. List all items")
        print("2. Delete an item by ID")
        print("3. Exit")
        
        choice = input("Enter your choice (1-3): ")
        
        if choice == '1':
            list_items()
        elif choice == '2':
            try:
                item_id = int(input("Enter Item ID to delete: "))
                delete_item(item_id)
            except ValueError:
                print("Invalid input. Please enter a numeric ID.")
        elif choice == '3':
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
