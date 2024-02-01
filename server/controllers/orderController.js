const { Order, SilpBill } = require("../models/order");
const { lineNotify, lineNotifyWithImages } = require("../functions/LineNotify");

const orders = async (req, res) => {
  try {
    const orders = await Order.find({}).exec();

    // console.log("ordered", orders);
    res.status(200).send({ data: orders });
  } catch (error) {
    console.log("error in ordered", error.message);
  }
};

const add_order = async (req, res) => {
  try {
    const data = req.body;
    // console.log("Received Order Data:", data);
    // console.log(req.body.customerName);

    const file = req.file;
    const paymentMethod = req.body.paymentMethod;
    const customerName = req.body.customerName;
    const customerAddress = req.body.customerAddress;
    const customerPhone = req.body.customerPhone;
    const productId = req.body.productId;
    const productName = req.body.productName

    // console.log('product name', productName)

    const generateOrderId = () => {
      const randomNumber = Math.floor(Math.random() * 10000); // Adjust the range as needed
      const timestamp = new Date().getTime();
      const randomBase36 = randomNumber.toString(36);
      const timestampBase36 = timestamp.toString(36);
      return `${randomBase36}${timestampBase36}`;
    };

    /// The end of way

    if (paymentMethod === "1" && !file) {
      // console.log("shipping 1");

      const genOrderId = generateOrderId().toString();
      const newOrderShipping = new Order({
        orderId: genOrderId,
        customerName,
        customerPhone,
        customerAddress,
        paymentMethod,
        productId,
        createAt: Date.now(),
      });
      const methodForNotify = 'ชำระเงิน ณ ปลายขอบฟ้า'
      const messageLines = [
        "Product Name: " + productName,
        "Customer Name: " + customerName,
        "Customer Phone: " + customerPhone,
        "Customer Address: " + customerAddress,
        "Method for Notify: " + methodForNotify
      ];
      const message = messageLines.join('\n');

      await newOrderShipping.save();
    
      /// line notify 
      lineNotify(message)

      res.json(newOrderShipping);
    }
    /// Credits
    else if (paymentMethod === "2" && file) {
      // console.log("shipping 2");
      // console.log("Received File Data:", file);

      // console.log("file mimetype", file.mimetype);

      if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
        res
          .status(400)
          .send("Invalid file format. Only JPEG and PNG images are allowed.");
        return; /// return out of this function
      }

      const fileBuffer = file.buffer;
      const genOrderId = generateOrderId().toString();
      const newOrderCredits = new Order({
        orderId: genOrderId,
        customerName,
        customerPhone,
        customerAddress,
        paymentMethod,
        productId,
        createAt: Date.now(),
      });

      const newSlipBill = new SilpBill({
        orderId: genOrderId,
        image: fileBuffer,
      });

      // console.log(fileBuffer)
      const methodForNotify = 'ชำระเงิน ณ ปีที่แล้ว'
      const messageLines = [
        "Product Name: " + productName,
        "Customer Name: " + customerName,
        "Customer Phone: " + customerPhone,
        "Customer Address: " + customerAddress,
        "Method for Notify: " + methodForNotify
      ];
      const message = messageLines.join('\n');
      
      await newOrderCredits.save();
      await newSlipBill.save();

      lineNotifyWithImages(message, file)


      // console.log("newOrder", newOrderCredits);
      // console.log("newSlipBill", newSlipBill);
      res.json({
        newOrderCredits,
        newSlipBill,
      });
    } else {
      res.status(500).send("Missing file or shippingMethod wrong");
    }
  } catch (error) {
    console.log("error in ordering", error.message);
    res.status(500).send("Error something ", error.message);
  }
};

// app.get('/image/:orderId')

const getBills = async (req, res) => {
  const orderId = req.params.orderId;
  const message = 'asdasdas'
  SilpBill.findOne({ orderId })
    .then((silpBill) => {
      if (!silpBill) {
        res.status(404).send('Image not found');
        return;
      }
      console.log('silpBill', silpBill)
      lineNotify(message, silpBill)
      res.contentType('image/jpeg'); // Adjust the content type based on your file type
      res.send(silpBill.image);
    })
    .catch((error) => {
      console.error('Error fetching image:', error.message);
      res.status(500).send('Error fetching image'+ error);
    });
}




module.exports = {
  orders,
  add_order,
  getBills
};
