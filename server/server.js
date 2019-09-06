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
//recieveCTRL
// GET to recieveCTRL.recieveSearchResult
app.get('/api/games/:search', recieveCtrl.getResults)
// DELETE to recieveCTRL.removeResults
app.delete('/api/games', recieveCtrl.deleteResults)

//gameCTRL.js
// GET to gameCTRL.getFavorites

// POST to gameCTRL.addToFavorites
//app.post('/api/games/:id', gameCtrl.add)
// PUT to gameCTRL.updateName

// DELETE to gameCTRL.removeFavorite


//recommendCTRL.js
// GET to recommendCTRL.recieveRecommendations
app.get('/api/games/recommend/:name', recommendCtrl.getRecommend)
// DELETE to recommendCTRL.removeRecommendations





// Listen up, for those sweet, sweet axios calls.
app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT} is on station!`))