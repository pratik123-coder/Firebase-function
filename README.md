# Things understood -
Firebase is more like AWS which provides similar kind of services like
- building functions like hosting, authentication, database and functions.
- various run time enviornments and analytical tools.

#Challenges faced
- Had to go through the documentation of the firebase like  https://firebase.google.com/docs/functions
- had difficulty in setting up a basic Nodejs app with express js which serves " Hello From Firebase " using firebase functions and firebase emulators
- had to learn how to setup firebase emulators by setting up "emulators" in firebase.json

 #Steps
 - Initiated firebase-tools by installing it through -g "global tag" in npm installer
 - gave access to firebase cli by using "firebase login"
 - Updated index.js file to use expressJs by installing it's package and importing it.
 - used express.json() to allow express parse json files.
 - created a post route "/check-rooms" which called a function "getRooms".
 - "getRooms" function extracted the checkin date and checkout date from the body. ( TODO : a matcher utility function or a validation using zod to be setup to convert these date string to date objects so that even slightly wrong inputs shall work too.
 - first found out the alreadyBooked rooms by using filter function find the rooms booked in between the dates and mapped it to booking
 - then avaliableRooms function uses the inverse of "alreadyBooked" function to determine the avalibale rooms in the database.
 - then "displayRoomType" funciton uses a filter function to store the rIdType in the display variable and map it to the roomPack to return the roomPack.
 - Finally while sending a response each attribute's value is attached with a corresponding function to give its value.

#Testing
Follow these commands -
- Clone this repository
- cd firebase-function
- cd functions
- firebase emulators:start
- 127.0.0 .... whill be shown in the terminal
- copy it
- postman -> open a new http request -> select POST methord -> go to body and select raw data ->
{
    "chkindt": "checkin date in format of "6june" / "10june",
    "chkoutdt":"checkout date in format of "8june" / "14june"
}

#Screenshots
<img width="1440" alt="Screenshot 2024-06-13 at 4 40 20 PM" src="https://github.com/pratik123-coder/Firebase-function/assets/66104012/b37a51fa-276e-4a50-9bf0-4ae606e32394">
<img width="1280" alt="Screenshot 2024-06-13 at 4 41 52 PM" src="https://github.com/pratik123-coder/Firebase-function/assets/66104012/9b4ad77e-059a-4523-aaea-dbbf1d426639">
