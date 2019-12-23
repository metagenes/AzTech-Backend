require('dotenv').config()

const modelAuth = require('../models/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const secretKey = process.env.SECRET_KEY || 270400;
module.exports = {
  registerUser: (req, res) => {
    // Hash the password
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

    // if register data valid, proceed to insert user data to db
    const data = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    }

    // Check username or email already exist
    modelAuth.registerCheck(data)
      .then(result => {
        if (result.length === 0) {
          // Register the user
          return modelAuth.registerUser(data)
            .then(result => res.json({
              status: 200,
              message: 'The user is successfully registered!',
              user: {
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
              }
            }))
            .catch(err => console.log(err))
        } else {
          // respond if username or email exist
          return res.status(400).send({
            status: 400,
            message: 'Username or Email already registered!'
          })
        }
      })
  },
}