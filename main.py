from flask import Flask, request, jsonify, session
from Nutrition import autoFillFood, getCal
from Exercise import calBurned
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
# from models import Users

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
app.secret_key = '1RUdd_QLhC69AVIJBeE-fA'
app.config['SESSION_COOKIE_NAME'] = "API Cookie"

class Users(db.Model):
    username = db.Column("username", db.String(100), primary_key=True)
    password = db.Column("password", db.String(100), nullable=False)
    exGoal = db.Column("exGoal", db.Integer, nullable=False)
    calLimit = db.Column("calLimit", db.Integer, nullable=False)
    exCurr = db.Column("exCurr", db.Integer, default=0)
    calCurr = db.Column("calCurr", db.Integer, default=0)
    gender = db.Column("gender", db.String(20))
    weight = db.Column("weight", db.Integer)
    height = db.Column("height", db.Integer)
    age = db.Column("age", db.Integer)

    def __init__(self, username, password, exGoal, calLimit, gender, weight, height, age):
        self.username = username
        self.password = password
        self.exGoal = exGoal
        self.calLimit = calLimit
        self.exCurr = 0
        self.calCurr = 0
        self.gender = gender
        self.weight = weight
        self.height = height
        self.age = age

@app.route('/signup', methods=['POST'])
def signup():
    """
    Input: username<string>, password, calLimit, exGoal, gender, weight
    :return:
    """
    if request.method == 'POST':
        username = request.form.get("username")
        user = Users.query.filter_by(username=username).first()
        if user:
            return {"result": "User already exists"}
        password = request.form.get("password")
        calLimit = request.form.get("calLimit")
        exGoal = request.form.get("exGoal")
        gender = request.form.get("gender")
        weight = request.form.get("weight")
        height = request.form.get("height")
        age = request.form.get("age")
        password = generate_password_hash(password, method="sha256")
        newUser = Users(username, password, exGoal, calLimit, gender, weight, height, age)
        db.session.add(newUser)
        db.session.commit()
        return {"result":"User has been added to database"}

@app.route('/login', methods=['POST'])
def login():
    if session.get('logged_in'):
        return {"result": "Already logged in"}
    username = request.form.get("username")
    password = request.form.get("password")
    userMatch = Users.query.filter_by(username=username).first()
    if not userMatch or not check_password_hash(userMatch.password, password):
        return {"result": "Please check your login details and try again"}
    session['logged_in'] = username
    return {"result":"User has been logged in"}

@app.route('/logout', methods=['POST'])
def logout():
    if not session['logged_in']:
        return {"result":"No user logged in"}
    session['logged_in'] = None
    return {"result":"Successfully logged out"}

@app.route('/getCalories/<string:source>', methods=['POST'])
def getCalories(source):
    """

    """
    if request.method == "POST":
        data = request.form
        username = session['logged_in']
        user = Users.query.filter_by(username=username).first()
        if source == "food":
            uIn = data.get('food')
            foodName = autoFillFood(uIn)
            weight = int(data.get('weight'))
            calories = getCal(foodName, weight)
            user.calCurr += calories
        elif source == "exercise":
            query = data.get('query')
            gender = user.gender
            weight = user.weight
            height = user.height
            age = user.age
            calories = calBurned(query,gender,weight,height,age)
            user.exCurr += calories
            over = user.calCurr - user.calLimit if user.calCurr > user.calLimit else 0
            if user.exGoal - user.exCurr + over <= 0:
                user.calCurr = 0
                user.exCurr = 0
                db.session.commit()
                return {'done':True}
        db.session.commit()
        calLimit = user.calLimit
        calCurr = user.calCurr
        exCurr = user.exCurr
        exGoal = user.exGoal
        return jsonify({'done': False, 'calLimit':calLimit, 'calCurr':calCurr, 'exCurr':exCurr, 'exGoal':exGoal})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
