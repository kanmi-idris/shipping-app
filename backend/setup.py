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
    "password VARCHAR(255),"
    "PRIMARY KEY (`id`)"
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
            print("Failed creating database: {}".format(err))
        exit(1)


def create_tables():
    try:
        cursor.execute("USE {}".format(DB_NAME))
        for table_name in TABLES:
            table_details = TABLES[table_name]
            try:
                print("Creating table ({}) ".format(table_name), end="")
                cursor.execute(table_details)
            except mysql.connector.Error as err:
                if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
                    print('Table {} already exists.'.format(table_name))
                else:
                    print(err.msg)
    except mysql.connector.Error as err:
        print("Failed using database: {}".format(err))
        exit(1)


create_database()
create_tables()
