const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
require("dotenv").config();



const order = require("./routes/orderRoute");
const product = require("./routes/productRoute");

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use("/api/product", product);
app.use("/api/order", order);



// app.post('/upload', upload.single('file'), (req, res) => {
//     // Access the form data in req.body and file data in req.file
//     console.log('Received Order Data:', req.body);
//     console.log(req.body.name)
//     console.log('Received File Data:', req.file);
  
//     // Process the data and respond to the client
//     res.json({ message: 'Order received successfully!' });
//   });

app.listen(process.env.PORT, () => {
  console.log(`App running at ${process.env.PORT}`);
});
