require("dotenv").config()

const mysql = require("mysql")

const conn = mysql.createPool({
	host: 'remotemysql.com',
	user: 'zyG6zO2CVZ',
	password: 'xBzuEpmGrU',
	database: 'zyG6zO2CVZ'
});
module.exports = conn