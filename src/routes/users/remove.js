const User = require('./../../schema/user')

module.exports = (req, res) => {
    User
        .findByIdAndRemove(req.params.id)
        .then(() => {
            return res.status(200).json({
                status: true                
            })
        })
        .catch(error => {
            return res.status(500).json({
                status: false,
                error
            })
        })
}