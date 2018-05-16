module.exports = (app, passport) => {
    app.use('/', require('./routes/main/')(passport))
    app.use('/users', require('./routes/users'))
}