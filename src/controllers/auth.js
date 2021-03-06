require("dotenv").config();

const modelAuth = require("../models/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  registerUser: (req, res) => {
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    // if register data valid, proceed to insert user data to db
    const data = {
      username: req.body.username,
      email: req.body.email,
      fullname: req.body.fullname,
      password: hashedPassword,
      photo:"https://res.cloudinary.com/naandalistcloud/image/upload/v1573126729/icon-male_ep884n.png"
    };

    // Check username or email already exist
    modelAuth.registerCheck(data).then(result => {
      if (result.length === 0) {
        // Register the user
        return modelAuth
          .registerUser(data)
          .then(result =>
            res.json({
              status: 200,
              message: "The user is successfully registered!",
              user: {
                username: req.body.username,
                email: req.body.email,
                fullname: req.body.fullname,
                password: hashedPassword,
                photo:"https://res.cloudinary.com/naandalistcloud/image/upload/v1573126729/icon-male_ep884n.png"
              }
            })
          )
          .catch(err => console.log(err));
      } else {
        // respond if username or email exist
        return res.status(400).send({
          status: 400,
          message: "Username or Email already registered!"
        });
      }
    });
  },
  loginUser: (req, res) => {
    const data = {
      username: req.body.username,
      password: req.body.password
    };
    modelAuth
      .loginUser(data)
      .then(result => {
        const validPassword = bcrypt.compareSync(
          req.body.password,
          result[0].password
        );
        if (!validPassword) {
          return res.status(400).send({
            status: 400,
            message: "Password is wrong"
          });
        } else {
          const token = jwt.sign(
            {
              id: result[0].id_user,
              username: result[0].username,
              fullname: result[0].fullname,
              email:result[0].email,
              photo:result[0].photo
            },
            'Rahasia_Kita_Berdua',
            {
              expiresIn: "10h"
            }
          );
          res.send({
            status: 200,
            message: "Login successfully!",
            data: result,
            token
          });
        }
      })
      .catch(err => {
        res.status(400).send({
          status: 400,
          message: "Username does not exist",
          err
        });
      });
  }
};
