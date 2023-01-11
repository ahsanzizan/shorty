const mongoose = require('mongoose')
require('dotenv').config()

exports.connectDB = function() {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true, useUnifiedTopology: true
    }, () => console.log(`Connected to database : ${process.env.DB_URL.connection}`))
}