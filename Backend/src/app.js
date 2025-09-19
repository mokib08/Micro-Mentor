const express = require("express")
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/auth.routes")
const tastRoute = require('./routes/task.Routes')

const app = express();
app.use(express.json())
app.use(cookieParser())

// authRoute
app.use('/api/auth', authRoute)


app.use('/api/task', tastRoute)

module.exports = app;