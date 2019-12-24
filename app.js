require("dotenv").config()
const express = require("express")
const app = express()
const logger = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const serverPORT = 3030
const PORT = process.env.PORT || serverPORT


const PartnerRoute = require("./src/routes/partner")
const AuthRoute = require("./src/routes/auth")
const UserRoute = require("./src/routes/user")
const AdminRoute = require("./src/routes/admin")

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

//Route for Partner
app.use("/partner",PartnerRoute)
//Route for Users
app.use("/user",UserRoute)
app.use("/admin",AdminRoute)


