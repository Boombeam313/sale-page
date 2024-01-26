
const { Order } = require('../models/order')

const orders = async(req,res) => {
    try{

        const orders = await Order.find({}).exec()

        console.log('ordered', orders)
        res.status(200).send({data : orders})
    }
    catch(error){
        console.log('error in ordered', error.message)
    }
}

const ordering = async(req,res) => {
    
    try{
        const data = req.body
        
        const newOrder = Order({
            ...data
        })
        await newOrder.save()
        
        console.log('data ordering :', data)
        res.status(500).send({"data": newOrder})    
    }
    catch(error){
        console.log('error in ordering', error.message)
        res.status(500).send('Error something ', error.message )
    }

}

module.exports = {
    orders,
    ordering
}