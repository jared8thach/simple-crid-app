const mongoose = require('mongoose');

// schema for a Product object
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name."],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },

        price: {
            type: Number,
            required: true,
            default: 0,
        },
        
        image: {
            type: String,
            required: false
        },
    },
    {
        // this will log when the entry was created at and updated at
        timestamps: true
    },
);

// creating Product model using Product schema
const Product = mongoose.model('Product', ProductSchema);

// exporting Product
module.exports = Product;