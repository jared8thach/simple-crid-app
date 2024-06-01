require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from Node API");
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