const express = require('express');
const Route = express.Router();
const UserController = require('../controllers/user');
const cors = require("cors")
const app = express()
app.use(cors())

Route.get('/', UserController.getUser);
Route.get('/:id',UserController.getUserByID);
Route.get('/history/:id',UserController.getUserHistory);
// Route.get('/history',UserController.getHistory);
Route.post('/', UserController.orderVoucher);
Route.post('/voucher',UserController.generateVoucher);
module.exports = Route;