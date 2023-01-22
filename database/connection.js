const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('strictQuery', false)

exports.connectDB = function() {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true, useUnifiedTopology: true
    }, () => console.log(`Connected Successfully}`))
}