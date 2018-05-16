const express = require('express')
const router = express.Router()

module.exports = (passport) => {
    router.get('/', passport.authenticate('token', { session: false }), require('./main'))
    return router
}

//module.exports = router