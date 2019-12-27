const express = require('express');
const Route = express.Router();
const PartnerController = require('../controllers/partner');
const cors = require("cors")
const app = express()
app.use(cors())

Route.get('/', PartnerController.getAll);
Route.get('/:id',PartnerController.getByID);
Route.patch('/:id',PartnerController.updateStock);
Route.get('/s/search',PartnerController.searchPartner);
Route.post('/',PartnerController.postPartner);
Route.get('/v/veggies',PartnerController.getVeggies);
Route.get('/r/category',PartnerController.getCategory);
Route.delete('/:id',PartnerController.deleteByID);
module.exports = Route;