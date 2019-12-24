const express = require ('express');
const AdminModel = require ('../models/admin');
const formRes = require ('../helpers/formRes')
// const Router = express.Router();

module.exports = {
    getHistory: (req,res) => {
        AdminModel
        .getHistory()
        .then(response => formRes.getHistory (res, response,200))
        .catch (err => console.log(err));
    },
}