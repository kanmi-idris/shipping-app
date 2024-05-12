import mysql.connector

config = {
    "user": "root",
    "password": "ola@olaidris",
    'host': "localhost",
    'raise_on_warnings': True,
    "database": 'shippingApp'

}

db = mysql.connector.connect(**config)
cursor = db.cursor()
