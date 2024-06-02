require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const app = express();

// using JSON formatting
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node API');
});

// by default, Express does not allow JSON format in request
// therefore, we must establish a middleware
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
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