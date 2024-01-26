const express = require('express')
const router = express.Router()

const { orders, ordering } = require('../controllers/orderController')


router.get('/get-orders', orders)
router.post('/ordering', ordering)

module.exports = router