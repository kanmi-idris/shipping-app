import mysql.connector
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from database import db, cursor

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://shipping-app.vercel.app"}})


# account creation api
@app.route('/create_account', methods=['POST'])
def create_user():
    data = request.json
    # Checking if the email already exists
    cursor.execute("SELECT id FROM users WHERE email = %s", (data['email'],))
    if cursor.fetchone():
        return jsonify({"message": "Email already in use"}), 409

    # if email does not exist, lets create account
    hashed_password = generate_password_hash(
        data['password'], method='pbkdf2:sha256')
    try:
        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)",
            (data['name'], data['email'], hashed_password)
        )
        db.commit()
        user_id = cursor.lastrowid
        return jsonify({"id": user_id, "name": data['name']}), 201
    except mysql.connector.errors.IntegrityError as e:
        db.rollback()
        return jsonify({"message": str(e)}), 500


# user login api
@app.route('/login', methods=['POST'])
def login_user():
    data = request.json
    # Retrieve the user from the database by email
    cursor.execute(
        "SELECT id, name, password FROM users WHERE email = %s", (
            data['email'],)
    )
    user = cursor.fetchone()

    # if the password is correct
    if user:
        password_hash = user[2]
        if check_password_hash(password_hash, data['password']):
            # if password is correct
            return jsonify({"id": user[0], "name": user[1]}), 200
        else:
            # if password is incorrect
            return jsonify({"message": "Incorrect password"}), 401
    else:
        # if no user email is not found
        return jsonify({"message": "Email not found"}), 404


# edit user profile api
@app.route('/users/<int:user_id>', methods=['PATCH'])
def update_user_name(user_id):
    data = request.json
    new_name = data['name']
    cursor.execute(
        "UPDATE users SET name = %s WHERE id = %s",
        (new_name, user_id)
    )
    db.commit()
    return jsonify({"status": "success", "message": "User name updated"}), 200


if __name__ == '__main__':
    app.run(debug=True)
