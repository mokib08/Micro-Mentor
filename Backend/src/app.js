const express = require("express")
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes")
const bedgeRoutes = require('./routes/bedge.routes')
const taskRoute = require('./routes/task.Routes')
const goalsRoute = require('./routes/goal.route')
const reviewRoutes = require('./routes/review.routes')
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// authRoute
app.use('/api/auth', authRoutes)

// taskRoute
app.use('/api/task', taskRoute)
// goalsRoute with Gemini 
app.use('/api/goals', goalsRoute)

// bedgeRoutes
app.use('api/bedge', bedgeRoutes)

// reviewRoutes
app.use('api/review', reviewRoutes)

module.exports = app;