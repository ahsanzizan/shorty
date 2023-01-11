require('dotenv').config()
const express = require('express');
const router = require('./routers/router')
const connection = require('./database/connection')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false}))

// DB connection : You can set DB_URL to mongodb://127.0.0.1:27017/ in the .env file
connection.connectDB()


// Routings
app.use('/', router)

// Listening
app.listen(process.env.PORT || 3000, () => console.log(`App is running on port ${process.env.PORT || 3000}`));


