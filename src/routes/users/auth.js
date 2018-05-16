const JwtStrategy = require('passport-jwt').Strategy
const JwtConfigs = require('./../../config')
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('./../../schema/user')

module.exports = (passport) => {
    passport.use('token', new JwtStrategy(JwtConfigs, (payload, cb) => {
        User
            .findById(payload.id)
            .then((user) => {
                if (!user) {
                    return cb(null, false)
                }
                return cb(null, user)
            })
            .catch((error) => {
                return cb(error, false)
            })
    }))
}