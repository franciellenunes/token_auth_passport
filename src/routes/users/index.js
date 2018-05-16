const express = require('express')
const router = express.Router()
const criterioCreate = require('./validate/create')
const validate = require('./validate')

router.post('/token', require('./token'))
router.post('/', criterioCreate, validate, require('./create'))
router.delete('/:id', require('./remove'))

module.exports = router