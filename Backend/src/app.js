const express = require("express")
const cookieParser = require("cookie-parser")
const session = require('express-session');
const authRoutes = require("./routes/auth.routes")
const bedgeRoutes = require('./routes/bedge.routes')
const taskRoute = require('./routes/task.Routes')
const goalsRoute = require('./routes/goal.route')
const googleRoute = require('./routes/google.routes')

const cors = require("cors")


const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use(session({
  secret: process.env.SESSION_SECRET,      // সেশন এনক্রিপ্টের জন্য
  resave: false,
  saveUninitialized: true
}));



// authRoute
app.use('/api/auth', authRoutes)

// taskRoute
app.use('/api/task', taskRoute)
// goalsRoute with Gemini 
app.use('/api/goals', goalsRoute)

// bedgeRoutes
app.use('/api/bedge', bedgeRoutes)

// GoogleCalendar
app.use('/api/google', googleRoute)



module.exports = app;

// /api/google/callback