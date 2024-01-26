const express = require('express')
const router = express.Router()

const { getProducts, addProduct } = require('../controllers/productController')

router.get('/get-products', getProducts)
router.post('/add-product', addProduct)

module.exports = router