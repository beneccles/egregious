require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const gameCtrl = require('./controllers/gameCTRL')
const recieveCtrl = require('./controllers/recieveCTRL')
const recommendCtrl = require('./controllers/recommendCTRL')

// Top level middleware
app.use(express.json())

/***SERVER ENDPOINTS***/
//gameCTRL.js
// GET to gameCTRL.getFavorites

// POST to gameCTRL.addToFavorites

// PUT to gameCTRL.updateName

// DELETE to gameCTRL.removeFavorite


//recommendCTRL.js
// GET to recommendCTRL.recieveRecommendations

// DELETE to recommendCTRL.removeRecommendations


//recieveCTRL
// GET to recieveCTRL.recieveSearchResult

// DELETE to recieveCTRL.removeResults


// Listen up, for those sweet, sweet axios calls.
app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT} is on station!`))