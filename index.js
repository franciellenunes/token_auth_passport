const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const passport = require('passport')
const app = express();

require('./src/routes/users/auth')(passport)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())

require('./src/index')(app, passport)

mongoose.connect('mongodb://localhost:27017/auth_token')
mongoose.Promise = global.Promise
app.listen(9000, () => {
    console.log('Express has been started')
})