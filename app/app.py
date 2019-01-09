from flask import Flask

def create_app():
    """
    Create app
    """
  
    # app initiliazation
    app = Flask(__name__)
    return app