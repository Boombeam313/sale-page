const { Order, SilpBill } = require("../models/order");

const orders = async (req, res) => {
  try {
    const orders = await Order.find({}).exec();

    console.log("ordered", orders);
    res.status(200).send({ data: orders });
  } catch (error) {
    console.log("error in ordered", error.message);
  }
};

const ordering = async (req, res) => {
  try {
    const data = req.body;
    console.log("Received Order Data:", data);
    console.log(req.body.customerName);
    
    const file = req.file;
    const shippingMethod = req.body.shippingMethod
    const customerName = req.body.customerName
    const customerAddress = req.body.customerAddress
    const customerPhone = req.body.customerPhone
    
    
    console.log("Received File Data:", file);

      const generateOrderId = () => {
        const randomNumber = Math.floor(Math.random() * 10000); // Adjust the range as needed
        const timestamp = new Date().getTime();
        const randomBase36 = randomNumber.toString(36);
        const timestampBase36 = timestamp.toString(36);
        return `${randomBase36}${timestampBase36}`;
      };

      const productId = 'This is product ID'

      /// The end of way

      if (shippingMethod === '1' && !file){
        console.log('shipping 1')

      const genOrderId = generateOrderId().toString()
      const newOrderShipping = new Order({
        orderId: genOrderId,
        customerName,
        customerPhone,
        customerAddress,
        shippingMethod,
        productId,
        createAt: Date.now()
      })
      await newOrderShipping.save()
      res.json(newOrderShipping)
    }
    /// Credits
    else if (shippingMethod === '2' && file){
      console.log('shipping 2')


      if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
        res.status(400).send('Invalid file format. Only JPEG and PNG images are allowed.');
        return; /// return out of this function 
      }
      
      const fileBuffer = file.buffer
      const genOrderId = generateOrderId().toString()
      const newOrderCredits = new Order({
        orderId: genOrderId,
        customerName,
        customerPhone,
        customerAddress,
        shippingMethod,
        productId,
        createAt: Date.now()
      })

      const newSlipBill = new SilpBill({
        orderId: genOrderId,
        image: fileBuffer
      })
      await newOrderCredits.save()
      await newSlipBill.save()

      console.log('newOrder', newOrderCredits)
      console.log('newSlipBill', newSlipBill)
      res.json({
        newOrderCredits,
        newSlipBill
      })
    }
    else{
      res.status(500).send('Missing file or shippingMethod wrong')
    }

  } catch (error) {
    console.log("error in ordering", error.message);
    res.status(500).send("Error something ", error.message);
  }
};

module.exports = {
  orders,
  ordering,
};
