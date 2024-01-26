const { Product } = require('../models/product')

const getProducts = async(req,res) => {
    
    try{
        const pro = await Product.find({}).exec()
        console.log(pro)
        res.send(pro)
    }
    catch(error){
        console.log('error from get products', error.message)
    }

}

const addProduct = async(req,res) => {

    try{
        const data = req.body

        const productIdAlreadyExists =  await Product.find({ productId : data.productId})
        console.log("productIdAlreadyExists", productIdAlreadyExists)

        /// if Product still not in Database
        if (productIdAlreadyExists === null) {

            res.status(400).send('This Shit Product ID Is Not  Exists~~~')
            const newProduct = new Product({
                ...data
            })
            await newProduct.save()
            console.log('newProduct', newProduct)
            res.status(200).send(newProduct)
        }
        /// if product already in database
        else{
            res.status(500).send('This Shit Product ID Already Exists~~~~~~~~~~~~~~')
        }
    }
    catch(error) {
        console.log('error in add product' ,error.message)
    }


}

module.exports = {
    getProducts,
    addProduct
}