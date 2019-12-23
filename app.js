require("dotenv").config()
const express = require("express")
const app = express()
const logger = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const serverPORT = 3306
const PORT = process.env.PORT || serverPORT


const AuthRoute = require("./src/routes/auth")


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
app.use(cors())
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

// Route for Auth
app.use("/", AuthRoute)


