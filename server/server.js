require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const gameCtrl = require('./controllers/gameCTRL')
const recieveCtrl = require('./controllers/recieveCTRL')
const recommendCtrl = require('./controllers/recommendCTRL')

