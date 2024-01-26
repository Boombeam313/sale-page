
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./db/db')
require("dotenv").config();

const multer = require('multer')

const order = require('./routes/orderRoute')
const product = require('./routes/productRoute')



connectDB()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/product', product)
app.use('/api/order', order)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`
      cb(null, fileName)
    }
  })
  
  const upload = multer({
    storage: storage
  })


app.post('/upload', upload.single('test'), (req, res) => {
    res.send(req.file)
  })

app.listen(process.env.PORT, () =>{
    console.log(`App running at ${process.env.PORT}`)
})