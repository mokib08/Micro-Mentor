const express = require("express")
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes")
<<<<<<< HEAD
const tastRoute = require('./routes/task.Routes')
const bedgeRoutes = require('./routes/bedge.routes')

=======
const taskRoute = require('./routes/task.Routes')
const goalsRoute = require('./routes/goal.route')
>>>>>>> 49e9f821262fb26523e669cb95d4f48304282328
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

module.exports = app;