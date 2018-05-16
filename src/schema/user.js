const mongoose = require('mongoose')
const bcrypt = require('bcrypt-node')

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String, 
        required: true
    }
})

User.methods.genHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null)
}

User.methods.comparePassword = function(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = mongoose.model('User', User)