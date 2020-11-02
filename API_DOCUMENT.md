npm install
npm start

API DOCUMENT:

GET     http://localhost:4000/club to get all club
GET     http://localhost:4000/club/:clubId to get club with that id
GET     http://localhost:4000/club?score=1 to get clubs whose score is 1
POST    http://localhost:4000/club to create a club (body: {name: "test", score: 2})
POST    http://localhost:4000/club/filterByScore to find clubs with a given score (body: {min: 1, max: 5})
POST    http://localhost:4000/club/search to search clubs with a given keyword (body: {key: "test"})
PUT     http://localhost:4000/club to update clubs (body: {name: "test", score: 1})
DELETE  http://localhost:4000/club/:clubId to delete a club with that id