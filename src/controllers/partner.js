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
    getVeggies:(req,res) => {
        PartnerModel
        .getVeggies()
        .then(response => formRes.getVeggies (res, response,200))
        .catch (err => console.log(err));
    },
    getCategory:(req,res) => {
        PartnerModel
        .getCategory()
        .then(response => formRes.getCategory (res, response,200))
        .catch (err => console.log(err));
    },
    deleteByID:(req,res) => {
        const id = req.params.id
        PartnerModel
        .deleteByID(id)
        .then(response => formRes.deleteByID (res, response,200))
        .catch (err => console.log(err));
    },
    updateVoucher:(req,res) => {
        const id = req.params.id
        PartnerModel
        .updateVoucher(id)
        .then(response => formRes.updateVoucher (res, response,200))
        .catch (err => console.log(err));
    },
}