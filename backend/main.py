from flask import Flask
from api import app
import setup


def create_app():
    app = Flask(__name__)

    setup.create_database()
    setup.create_tables()

    return app


if __name__ == '__main__':
    app = create_app()
    app.run()
