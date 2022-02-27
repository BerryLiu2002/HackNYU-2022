# HackNYU-2022

# Contributors: Kevin Ng, Berry Liu, Andy Chen

## Project Title: ExerSLICE

**Inspiration**<br>
Fitness is a goal that many strive for, but that few are able to successfully stick to. The problem stems from the difficulty of sticking to the routine, when it is so easy to simply... not do it.<br>
One solution that comes to mind is to make it more engaging- something that is indeed easier said than done. However one approach that has seen its fair share of success lies in geolocation games- the most memorable being Pokemon Go. <br>
The real appeal of the game is that its combines the more appealing gaming element of Pokemon with the beneficial effects of daily exercise. And it worked- Pokemon Go in Summer 2016, had everyone outside running around to catch Pokemon!<br>
For HackNYU 2022, our team wanted to leverage a gamelike design into a health and fitness tracking app. We decided to implement RPG-like elements into the app, where meeting your health goals would help you to fight monsters in the application. <br>

**What does ExerSLICE do?**<br>
ExerSLICE allows users to turn their healthy choices in real life into damage done in the application. Interaction in the game is done in two ways- keeping track of your eating goals, as well as exercising.<br>
Users are able to set a calorie goal- both for working out and eating. <br>
By completing workouts, users can enter their workout using the exercise button, and the Nutritionix natural language autocomplete search will decipher your workout and return calories burned through the exercise using a wide range of factors, including your age, weight, height, gender, etc. The burned calories will be dealt as damage to the monster, so the more calories you burn, the more justice you serve to the monsters! <br>
Meeting your dietary goals will also affect your progress in the app. As you input the food that you eat into the app, the calories you have consumed will be added to your food bar, and once surpassing your set limits, the excess calories will be given to the enemy as a shield.<br>
By giving you an in game visualization of your progress towards your goals, ExerSLICE gives you concrete proof of the effort you have been putting into improving your health and fitness! <br>

**How we built it**<br>
The application was built as a separate frontend and backend using an API to send and recieve information. <br>
The front end of the project was fully implemented using HTML, CSS, Javascript and the Reactjs and React Router libraries. After the team discussed how health and fitness information could be used in interaction with the game. After discussion, a mockup for how the main screen of the application would look like was created, which was implemented in the frontend. <br>
The backend of the project was coded using Python, the Flask and requests libraries, and using SQLite for the database. After searching for suitable APIs to calculate the calories for both working out and eating, we decided on Nutritionix because of it's natural language capabilities and clear documentation. Using the Nutritionix API and an SQLite database, a RESTful API was created using Flask to allow for communication between the front and backend. <br>

**Challenges we ran into**<br>
This was the first hackathon for our entire team, and without experience with a lot of the fancy tech stacks that other teams might have used, creating a project that would still be able to match against the other teams' was certainly a challenge. We spent the first few hours brainstorming about which tracks we might be interested in creating a project for and what ideas were interesting. It wasn't until we started thinking about innovative apps in the past that Pokemon Go came up, and we can to the idea of creating ExerSLICE.<br>
Time management was another challenge that we ran into. Between this being our first hackathon and general inexperience with fast prototyping, being able to complete this project in 48 hours including taking time to rest was definitely difficult. In the end, we managed to complete both the front end and backend components of the project, though we ran into issues with merging the two near the end. In future hackathons, we can build up on our experiences from our first hackathon to make more in depth and innovative applications<br>

**What we learned**
We learned a great deal about the process of storyboarding and prototyping our application from start to *not so* finish, especially when considering how compressed the time period for the project was. Through the time constraint, we learned how to effectively communicate and storyboard for a project as a team and through attending the workshops that were offered
We also had the chance to practice and solidify our skills in the technologies that we used and to take them to the next level.

**What's next for ExerSLICE** <br> 
The front end will feature smoother transitions between pages and animations to make the application more dynamic and interactive. We plan on improving the user interface 
with more modern and sleek designs, rather than the blocky aesthetic that we have right now. The theme of the sprites and backgrounds feature a cartoon aesthetic so we will be
altering the UI to fit that style more appropriately. There will be more featured boss battles and sprite animations, as well as custom skins for the shield/heath bar and characters the users can choose from. <br>

The back end will feature the capability to connect with other fitness applications such as Apple Health to eliminate the need for users to manually enter data. The back end API
will be able to provide more accurate measurements across a far broader range of diets and exercises, and be able to perform far more precise calculations to better reflect the
user's health. <br>

Background vector created by ddraw - www.freepik.com
Sprites found at https://craftpix.net/freebies/free-wraith-tiny-style-2d-sprites/
