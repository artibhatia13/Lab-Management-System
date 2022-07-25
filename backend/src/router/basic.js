const express = require('express')
const router = express.Router()

const Student = require('../modal/Student')

router.get('/', (req, res) => {
    res.status(200).send('Successful')
})

module.exports = router