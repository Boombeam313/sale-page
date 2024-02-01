const express = require("express");
const router = express.Router();

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { orders, add_order, getBills } = require("../controllers/orderController");


router.get("/get-orders", orders);
router.post("/add-order", upload.single("file"), add_order);
router.get('/image/:orderId', getBills)

module.exports = router;
