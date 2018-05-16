const User = require('./../../schema/user')

module.exports = (req, res) => {
    let user = new User(req.body)

    user.password = user.genHash(user.password)

    user
        .save()
        .then((user) => {
            return res.status(201).json({
                status: true,
                user
            })
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                err
            })
        })

}