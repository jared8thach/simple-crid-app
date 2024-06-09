require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const app = express();

// by default, Express does not allow JSON format in request
// therefore, we must establish a middleware
app.use(express.json());
// another middleware to allow api to accept form requests
app.use(express.urlencoded({extended: false}));

// routes
// app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send('Hello from Node API.');
});

// get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// get one product
app.get('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// add one product
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
});

// update one product
app.put('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({message: 'Product not found. Could not update.'});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}); 

// delete one product
app.delete('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({message: 'Product not found. Could not delete.'})
        }
        res.status(200).json({message: `Product ${id} successfully deleted.`});
    } catch (error) {
        res.status(500);
    }
});

// First, connect to database
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@backenddb.zkb6dyb.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`)
  .then(() => {
    console.log('Database connected.');

    // Second, connect to server  
    app.listen(process.env.EXPRESS_SERVER_PORT, () => {
        console.log(`Server is running on port ${process.env.EXPRESS_SERVER_PORT}.`);
    });
    
})
.catch(() => {
    console.log('Database connection failed.');
});