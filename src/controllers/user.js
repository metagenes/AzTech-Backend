const express = require ('express');
const UserModel = require ('../models/user');
const formRes = require ('../helpers/formRes')
// const Router = express.Router();
const { uploadImage } = require('../helpers/uploadImage')


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
    generateVoucher: (req,res) => {
        const { id_user, id_partner } = req.body;
        const code = Math.floor((Math.random()*10000000) + 1);
            const dataOrder = {
				id_voucher: code,
                id_partner,
                id_user,
                status : "Not Used",
                
			};
        UserModel
        .generateVoucher(dataOrder)
        .then(response => formRes.orderVoucher (res, response,200))
        .catch (err => console.log(err));
    },
    // getHistory:(req,res) => {
    //     // const id = req.params.id;
    //     UserModel
    //     .getHistory()
    //     .then(response => formRes.getHistory (res, response,200))
    //     .catch (err => console.log(err));
    // },
    getVoucher:(req,res) => {
        const id = req.params.id
        UserModel
        .getVoucher(id)
        .then(response => formRes.getVoucher (res, response,200))
        .catch (err => console.log(err));
    },
    updateProfile:(req,res) => {
        const id = req.params.id;
        const { fullname, email, username } = req.body;
        const dataUser = {
            fullname,
            email,
            username,
        };
        UserModel
        .updateProfile(dataUser,id)
        .then(response => formRes.updateProfile (res, response,200))
        .catch (err => console.log(err));
    },
    // updateProfile: (req, res) => {
    //     const id = req.params.id
    //     const data = { ...req.body }

    //     UserModel.getUserByID(id).then(async result => {
    //       if (result.length !== 0) {
    //         if (req.files.length > 0) {
    //           data.photo = `${await uploadImage(req)}`
    //         }
    //         return UserModel
    //           .updateUser(data, id)
    //           .then(result => {
    //             UserModel.getUserByID(id).then(newData => {
    //               res.json({
    //                 status: 200,
    //                 message: `User ${id} has been updated`,
    //                 data: newData
    //               })
    //             })
    //           })
    //           .catch(err => {
    //             res.status(500).json({
    //               status: 500,
    //               message: err.message || "same error"
    //             })
    //           })
    //       }
    //        else {
    //         return res.status(400).send({
    //           status: 400,
    //           id,
    //           message: "User does not exist"
    //         })
    //       }
    //     })
    //   },
}