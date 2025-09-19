const express = require("express")
const tastRoute = require('./routes/task.Routes')

const app = express();
app.use(express.json())


app.use('/api/task', tastRoute)

module.exports = app;