import mysql.connector
from dotenv import load_dotenv
import os


load_dotenv()

config = {
    "user": "root",
    "password":  os.getenv('MYSQL_PASSWORD'),
    'host': "localhost",
    'raise_on_warnings': True,
    "database": 'shippingApp'

}

db = mysql.connector.connect(**config)
cursor = db.cursor()
