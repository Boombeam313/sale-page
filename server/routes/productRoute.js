const express = require('express')
const router = express.Router()

const { getProducts, addProduct, editProduct } = require('../controllers/productController')

router.get('/get-products', getProducts)
router.post('/add-product', addProduct)
router.post('/edit-product', editProduct)

module.exports = router