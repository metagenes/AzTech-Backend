const express = require ('express');
const UserModel = require ('../models/user');
const formRes = require ('../helpers/formRes')
// const Router = express.Router();

module.exports = {
    getUser: (req,res) => {
        UserModel
        .getUser()
        .then(response => formRes.getUser (res, response,200))
        .catch (err => console.log(err));
    },
    getUserByID: (req,res) => {
        const id = req.params.id
        UserModel
        .getUserByID(id)
        .then(response => formRes.getUserByID (res, response,200))
        .catch (err => console.log(err));
    },
    getUserHistory:(req,res) => {
        const id = req.params.id
        UserModel
        .getUserHistory(id)
        .then(response => formRes.getUserHistory (res, response,200))
        .catch (err => console.log(err));
    },
    orderVoucher: (req,res) => {
        const { id_user, id_partner, total } = req.body;
            const dataOrder = {
				id_user,
                id_partner,
                status : "Pending",
                total,
			};
        UserModel
        .orderVoucher(dataOrder)
        .then(response => formRes.orderVoucher (res, response,200))
        .catch (err => console.log(err));
    },
}