import requests
APP_KEY = "fcce5ca20917600fed8d88b09ec5246e"
APP_ID = "5a8d7a07"
endpoint = "https://trackapi.nutritionix.com/"
header = {
        "x-app-id": APP_ID,
        "x-app-key": APP_KEY,
        "x-remote-user-id": "0"
    }
def getCal(food_name, grams):
    payload = {
        "query": food_name
    }
    request = requests.post(endpoint + "/v2/natural/nutrients", headers=header, data=payload)
    response = request.json()
    # print(response)
    servCal = response['foods'][0]['nf_calories']
    servGram = response['foods'][0]['serving_weight_grams']
    calPerGram = servCal/servGram
    return int(grams * calPerGram)

def autoFillFood(user_in, limit=5):
    payload = {
        "query": user_in
    }
    request = requests.get(endpoint + "v2/search/instant", headers=header, params=payload)
    response = request.json()
    return parse_aF(response, limit)

def parse_aF(response, limit):
    common = response["common"][0:limit+1]
    topL = [item["food_name"] for item in common]
    return topL

uIn = input("Enter the food item: ")
food = autoFillFood(uIn)
print(food)
ind = int(input("Enter 0-4 based on the index you choose: "))
weight = int(input("Enter the weight in grams: "))
chosen = food[ind]
calories = getCal(chosen, weight)
print(f"Calories for {weight} grams of {chosen}: {calories} calories")
