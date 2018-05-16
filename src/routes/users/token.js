const User = require('./../../schema/user')
const jwt = require('jwt-simple')
const JwtConfigs = require('./../../config')

module.exports = (req, res) => {

    User
        .findOne({ "username": req.body.username })
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    status: false,
                    user: {}
                })
            }

            if (user.comparePassword(req.body.password, user.password)) {
                console.log("ok");
                let token = jwt.encode({ id: user._id }, JwtConfigs.secretOrKey)

                return res.status(200).json({
                    status: true,
                    token
                })
            }
        })
        .catch((error) => {

            /* return res.status(500).json({
                status: false,
                error

            }) */
        })
}