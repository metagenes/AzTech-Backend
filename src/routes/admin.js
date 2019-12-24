const express = require('express');
const Route = express.Router();
const UserController = require('../controllers/admin');
const cors = require("cors")
const app = express()
app.use(cors())
Route.get('/history',UserController.getHistory);


module.exports = Route;