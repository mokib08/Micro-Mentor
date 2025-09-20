const express = require("express")
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes")
const tastRoute = require('./routes/task.Routes')
const goalsRoute = require('./routes/goal.route')
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// authRoute
app.use('/api/auth', authRoutes)

// taskRoute
app.use('/api/task', tastRoute)
// goalsRoute with Gemini 
app.use('/api/goals', goalsRoute)

module.exports = app;