import requests
import json

APP_KEY = "fcce5ca20917600fed8d88b09ec5246e"
APP_ID = "5a8d7a07"
endpoint = "https://trackapi.nutritionix.com"
header = {
        "x-app-id": APP_ID,
        "x-app-key": APP_KEY,
        "Content-Type": "application/json"
    }

def calBurned(query, gender=None, weight=None, height=None, age=None):
    payload = json.dumps(
                {
                "query":query,
                "gender":gender,
                "weight_kg":weight,
                "height_cm":height,
                "age":age
                }
                )
    request = requests.post(endpoint + "/v2/natural/exercise", headers=header, data=payload)
    response = request.json()
    results = response.get('exercises')
    calories = results[0].get('nf_calories')
    return calories

calBurned("lifted weights for 30 minutes")
