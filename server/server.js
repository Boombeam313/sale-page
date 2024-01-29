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


app.listen(process.env.PORT, () => {
  console.log(`App running at ${process.env.PORT}`);
});
