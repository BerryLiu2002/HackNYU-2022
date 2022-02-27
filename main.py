from flask import Flask, request, jsonify, session
from Nutrition import autoFillFood, getCal
from Exercise import calBurned
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

class Users(db.Model):
    username = db.Column("username", db.String(100), primary_key=True)
    password = db.Column("password", db.String(100), nullable=False)
    calGoal = db.Column("calGoal", db.Integer, nullable=False)
    gender = db.Column("gender", db.String(20))
    weight = db.Column("weight", db.Integer)
    height = db.Column("height", db.Integer)
    age = db.Column("age", db.Integer)

    def __init__(self, username, password, calGoal, gender, weight, height, age):
        self.username = username
        self.password = calGoal
        self.calGoal = calGoal
        self.gender = gender
        self.weight = weight
        self.height = height
        self.age = age

# GET:
# request.args
# stores JSON in params
# POST:
# request.get_json(force=True)
# store JSON in body
@app.route('/signup', methods=['POST'])
def signup():
    
    return
@app.route('/getFood', methods=['GET'])
def getFood():
    """
    Takes in params as a JSON with 'food' mapped to the user input for food
    :return:
    JSON object with 'choices' mapped to a list of the top 5 relevant foods
    """
    if request.method == "GET":
        data = request.args
        foodInput = data.get("food")
        choices = autoFillFood(foodInput)
        return jsonify({'choices': choices})

@app.route('/getCalories/<string:source>', methods=['GET'])
def getCalories(source):
    """
    Takes in a JSON as params:
    'food': string with the user selected food from the getFood function
    'weight': weight of food in grams
    :return:
    JSON object with 'calories' mapped to the total calories consumed
    """
    if request.method == "GET":
        data = request.args
        if source == "food":
            foodName = data.get('food')
            weight = int(data.get('weight'))
            calories = getCal(foodName, weight)
            return jsonify({'calories': calories})
        elif source == "exercise":
            #this data may be stored in database in the future
            #instead, store logging in user in session and get their data from the database
            query = data.get('query')
            gender = data.get('gender')
            weight = data.get('weight')
            height = data.get('height')
            age = data.get('age')
            calories = calBurned(query,gender,weight,height,age)
            return jsonify({'calories': calories})


app.run(debug=True)
