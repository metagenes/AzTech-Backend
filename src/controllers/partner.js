const express = require ('express');
const PartnerModel = require ('../models/partner');
const formRes = require ('../helpers/formRes')
// const Router = express.Router();

module.exports = {
    getAll: (req,res) => {
        PartnerModel
        .getAll()
        .then(response => formRes.getAll (res, response,200))
        .catch (err => console.log(err));
    },
    getByID: (req,res) => {
        const id = req.params.id
        PartnerModel
        .getByID(id)
        .then(response => formRes.getByID (res, response,200))
        .catch (err => console.log(err));
    },
    updateStock: (req,res) => {
        const id = req.params.id
        PartnerModel
        .updateStock(id)
        .then(response => formRes.updateStock (res, response,200))
        .catch (err => console.log(err));
    },
    searchPartner:(req,res) => {
        const search = req.query.store
        PartnerModel
        .searchPartner(search)
        .then(response => formRes.searchPartner (res, response,200))
        .catch (err => console.log(err));
    },
    postPartner:(req,res) => {
        const { name, description,image,category,location,latitude,longitude,stock } = req.body;
            const dataPartner = {
                name, 
                description,
                image,
                stock,
                category,
                location,
                latitude,
                longitude,
                stock
			};
        PartnerModel
        .postPartner(dataPartner)
        .then(response => formRes.postPartner (res, response,200))
        .catch (err => console.log(err));
    },
}