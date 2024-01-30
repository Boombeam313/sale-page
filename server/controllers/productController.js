const { Product } = require('../models/product')



const generateProductId = () => {
    const randomNumber = Math.floor(Math.random() * 10000);
    const timestamp = new Date().getTime();
    const randomBase36 = randomNumber.toString(36);
    const timestampBase36 = timestamp.toString(36);
    return `${randomBase36}${timestampBase36}`;
};

const getProducts = async(req,res) => {
    
    try{
        const products = await Product.find({}).exec()
        console.log('Here the result for products',products)
        res.send(products)
    }
    catch(error){
        console.log('error from get products', error.message)
    }
}
const addProduct = async (req, res) => {
    try {
        const { productName, productDescription, productPrice } = req.body;

        const productId = generateProductId()
        
        // Check if the product with the given productId already exists
        const existingProduct = await Product.findOne({ productId });

        if (existingProduct) {
            // If product already exists, return a conflict response
            return res.status(409).send('Product with this ID already exists.');
        }
        // Create a new product and save it to the database
        const newProduct = new Product({
            productId,
            productName,
            productDescription,
            productPrice,
            createAt: Date.now(),
        });

        await newProduct.save();

        // Return a success response
        res.status(201).json({
            message: "Add Product Successful.",
            data: newProduct
        });
    } catch (error) {
        console.error('Error in addProduct:', error.message);
        // Return an internal server error response
        res.status(500).send('Internal Server Error');
    }
};

//////////////////////////////////////////////   It' work, I think
// Function to edit an existing product
const editProduct = async (req, res) => {
    try {
        const { productId, productName, productDescription, productPrice } = req.body;

        // Find the existing product by productId
        const existingProduct = await Product.findOne({ productId });

        if (!existingProduct) {
            // If product does not exist, return a not found response
            return res.status(404).send('Product not found.');
        }

        // Update the product details
        existingProduct.productName = productName;
        existingProduct.productDescription = productDescription;
        existingProduct.productPrice = productPrice;
        existingProduct.modified = Date.now();

        // Save the updated product to the database
        await existingProduct.save();

        // Return the updated product
        res.json(existingProduct);
    } catch (error) {
        console.error('Error in editProduct:', error.message);
        // Return an internal server error response
        res.status(500).send('Internal Server Error');
    }
};


module.exports = {
    getProducts,
    addProduct,
    editProduct,

}