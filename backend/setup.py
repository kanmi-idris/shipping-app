import mysql.connector
from mysql.connector import errorcode
from database import cursor

DB_NAME = 'shippingApp'

TABLES = {}

TABLES['users'] = (
    "CREATE TABLE `users` ("
    "id INT NOT NULL AUTO_INCREMENT,"
    "name VARCHAR(100),"
    "email VARCHAR(100) UNIQUE,"
    "password VARCHAR(100),"
    "PRIMARY KEY (`id`)"
    ") ENGINE=InnoDB"
)
TABLES['tracking'] = (
    "CREATE TABLE `tracking` ("
    "id INT NOT NULL AUTO_INCREMENT,"
    "user_id INT NOT NULL,"
    "description VARCHAR(100),"
    "quantity INT,"
    "expectedDeliveryDate DATE,"
    "status VARCHAR(100),"
    "trackingNumber VARCHAR(100) UNIQUE,"
    "PRIMARY KEY (`id`),"
    "FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)"
    ") ENGINE=InnoDB"
)
TABLES['deliveries'] = (
    "CREATE TABLE `deliveries` ("
    "id INT NOT NULL AUTO_INCREMENT,"
    "user_id INT NOT NULL,"
    "description VARCHAR(100),"
    "quantity INT,"
    "status VARCHAR(100),"
    "dateReceived DATE,"
    "PRIMARY KEY (`id`),"
    "FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)"
    ") ENGINE=InnoDB"
)


def create_database():
    try:
        cursor.execute("DROP DATABASE {}".format(DB_NAME))
        cursor.execute(
            "CREATE DATABASE IF NOT EXISTS {} DEFAULT CHARACTER SET 'utf8mb4'".format(DB_NAME))
        print("Database {} created!".format(DB_NAME))
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_DB_CREATE_EXISTS:
            print("Database {} already exists.".format(DB_NAME))
        else:
            print(err)


def create_tables():
    cursor.execute("USE {}".format(DB_NAME))

    for table_name in TABLES:
        table_details = TABLES[table_name]
        try:
            print("creating table ({}) ".format(table_name), end="")
            cursor.execute(table_details)
        except mysql.connector.Error as err:
            if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
                print('table {} already exists'.format(table_name))
            else:
                print(err.msg)
# def create_user(name, email, password):
#     query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
#     cursor.execute(query, (name, email, password))
#     # cnx .commit()
#     cursor.close()


create_database()
create_tables()
