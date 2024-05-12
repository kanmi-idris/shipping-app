from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from database import db, cursor

app = Flask(__name__)


@app.route('/users/create', methods=['POST'])
def create_user():
    data = request.json
    hashed_password = generate_password_hash(data['password'], method='sha256')
    cursor.execute(
        "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)",
        (data['name'], data['email'], hashed_password)
    )
    db.commit()
    user_id = cursor.lastrowid
    return jsonify({"id": user_id, "name": data['name']}), 201


@app.route('/users/login', methods=['POST'])
def login_user():
    data = request.json
    cursor.execute(
        "SELECT id, name, password FROM users WHERE email = %s", (
            data['email'],)
    )
    user = cursor.fetchone()
    if user and check_password_hash(user[2], data['password']):
        return jsonify({"id": user[0], "name": user[1]}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401


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
