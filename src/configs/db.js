require("dotenv").config()

const mysql = require("mysql")

const conn = mysql.createPool({
	host: 'remotemysql.com',
	user: 'LKZjlIGJxt',
	password: 'AVznZQ9Bna',
	database: 'LKZjlIGJxt'
});
module.exports = conn