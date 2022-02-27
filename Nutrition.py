import requests
APP_KEY = "fcce5ca20917600fed8d88b09ec5246e"
APP_ID = "5a8d7a07"
endpoint = "https://trackapi.nutritionix.com"
header = {
        "x-app-id": APP_ID,
        "x-app-key": APP_KEY,
        "x-remote-user-id": "0"
    }
def getCal(food_name, grams):
    """
    :param food_name:
    :param grams:
    :return:
    Calories gained from eating food <int>
    """
    payload = {
        "query": food_name
    }
    request = requests.post(endpoint + "/v2/natural/nutrients", headers=header, data=payload)
    response = request.json()
    servCal = response['foods'][0]['nf_calories']
    servGram = response['foods'][0]['serving_weight_grams']
    calPerGram = servCal/servGram
    return int(grams * calPerGram)

def autoFillFood(user_in):
    """
    :param user_in:
    :return:
    Closest food item to the input <string>
    """
    payload = {
        "query": user_in
    }
    request = requests.get(endpoint + "/v2/search/instant", headers=header, params=payload)
    response = request.json()
    food = response["common"][0]["food_name"]
    return food
