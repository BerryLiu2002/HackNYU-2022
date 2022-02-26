import requests
APP_KEY = "fcce5ca20917600fed8d88b09ec5246e"
APP_ID = "5a8d7a07"

def autoFillFood(user_in, limit=5):
    header = {
        "x-app-id": APP_ID,
        "x-app-key": APP_KEY
    }
    payload = {
        "query":user_in
    }
    request = requests.get("https://trackapi.nutritionix.com/v2/search/instant", headers=header, params=payload)
    response = request.json()
    return parse_aF(response, limit)

def parse_aF(response, limit):
    common = response["common"][0:limit+1]
    topL = [item["food_name"] for item in common]
    return topL

print(autoFillFood("Apple"))
