require("dotenv").config()
const cloudinary = require("cloudinary")

const cloudinaryConfig = (req, res, next) => {
  cloudinary.config({
    cloud_name: 'metagenes',
    api_key: '934195935189999',
    api_secret: 'a41UHgjtjk7f3S5jdGbAS1xGJWI'
  })
  next()
}

exports.cloudinaryConfig = cloudinaryConfig
exports.uploader = cloudinary.v2.uploader
