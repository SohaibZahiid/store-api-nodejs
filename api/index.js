// .ENV
require("dotenv").config()
// Cors
const cors = require('cors')
// Error handler
require('express-async-errors')
// Express
const express = require('express');
const app = express()
// DB
const connectDB = require('../src/db/Connect')
// Routes
const routes = require('../src/routes/Store.route')
// Middlewares
const errorHandlerMiddleware = require('../src/middleware/ErrorHandler.middleware')
const notFoundMiddleware = require('../src/middleware/not-found')


// Middleware
// Add headers before the routes are defined
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


app.use(express.json())
app.use(cors())
// Routes
app.use(routes)
// Custom Error Handlers
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

// PORT
const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server running on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()