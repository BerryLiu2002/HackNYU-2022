from flask import Flask
from Nutrition import autoFillFood, getCal

app = Flask(__name__)

@app.route('/getFood', methods=['GET'])
def getFood()
