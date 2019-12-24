const express = require('express');
const Route = express.Router();
const PartnerController = require('../controllers/partner');
const cors = require("cors")
const app = express()
app.use(cors())

Route.get('/', PartnerController.getAll);
Route.get('/:id',PartnerController.getByID);
Route.patch('/:id',PartnerController.updateStock);
module.exports = Route;