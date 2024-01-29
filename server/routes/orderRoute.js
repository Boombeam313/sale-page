const express = require('express')
const router = express.Router()

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { orders, ordering } = require('../controllers/orderController')


router.get('/get-orders', orders)
router.post('/ordering', upload.single('file'), ordering)

module.exports = router