const ExtractJwt = require('passport-jwt').ExtractJwt

module.exports = {
    secretOrKey: 'cluberotagourmeto5',
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')
}