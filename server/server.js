require('dotenv').config() // Allow use of environment variables
const express = require('express')
const app = express()
const path = require('path')
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500

// Log to console enivronment variable 'NODE_ENV'
console.log(process.env.NODE_ENV)

// Connect to MongoDB
connectDB()

// Log requests [Middleware]
app.use(logger)

// Set who is allowed access to REST API by using CORS [Middleware]
app.use(cors(corsOptions))

// Ability to recieve and parse json in application [Middleware]
app.use(express.json())

// Parse cookies received [Middleware]
app.use(cookieParser())

// Telling Express where to find static files (css, images, etc) used on server [Middleware]
app.use('/', express.static(path.join(__dirname, 'public')))
// app.use(express.static('public')) // Will also work, not as explicit as one above

// Routers/Routing
app.use('/', require('./routes/root')) // Telling Express where to find root file
app.use('/auth', require('./routes/authRoutes'))
app.use('/users', require('./routes/userRoutes'))
app.use('/fuelQuotes', require('./routes/fuelQuoteRoutes'))

// Handle any requested resources not found on server (errors)
app.all('*', (req, res) => {
    res.status(404)
    
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found'})
    } else {
        res.type('txt').send('404 Not Found')
    }
})

// Log errors
app.use(errorHandler)

// Connect to mongoDB using Mongoose
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

// Log Mongoose/MongoDB connection errors
mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
