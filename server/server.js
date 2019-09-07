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
app.get('/api/games/favorite', gameCtrl.send)
// POST to gameCTRL.addToFavorites
app.post('/api/games/favorite/:id', gameCtrl.add)
// PUT to gameCTRL.updateName
app.put('/api/games/favorite/:name', gameCtrl.rename)
// DELETE to gameCTRL.removeFavorite
app.delete('/api/games/favorite/delete', gameCtrl.remove)


//recommendCTRL.js
// GET to recommendCTRL.recieveRecommendations
app.get('/api/games/recommend/:name', recommendCtrl.getRecommend)
// DELETE to recommendCTRL.removeRecommendations
app.delete('/api/games/recommend/:deleteIndex', recommendCtrl.deleteRecommend)





// Listen up, for those sweet, sweet axios calls.
app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT} is on station!`))