const express = require("express")
const cookieParser = require("cookie-parser")
const tastRoute = require('./routes/task.Routes')

const app = express();
app.use(express.json())
app.use(cookieParser())


app.use('/api/task', tastRoute)

module.exports = app;