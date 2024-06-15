require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const Person = require('./models/person.model.js');
const productRoute = require('./routes/product.route.js');
const personRoute = require('./routes/person.route.js');

const app = express();

// by default, Express does not allow JSON format in request
// therefore, we must establish a middleware
app.use(express.json());
// another middleware to allow api to accept form requests
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/product', productRoute);
app.use('/api/person', personRoute);

// // get all persons
// app.get('/api/person', async (req, res) => {
//     try {
//         const people = await Person.find({});
//         if (!people) {
//             return res.status(500).json({message: 'People could not be foundd.'});
//         }
//         res.status(200).json(people);
//     } catch (error) {
//         res.status(500).json({message: 'People could not be found.'});
//     }
// });

// // add a person
// app.post('/api/person', async (req, res) => {
//     try {
//         const addPerson = await Person.create(req.body);
//         if (!addPerson) {
//             return res.status(500).json({message: 'Could not add person.'});
//         }
//         res.status(200).json(addPerson);
//     } catch (error) {
//         res.status(500).json({message: 'Could not add person.'});
//     }
// });

// // update a person
// app.put('/api/person/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatePerson = await Person.findByIdAndUpdate(id, req.body);
//         if (!updatePerson) {
//             return res.status(500).json({message: 'Could not update person.'});
//         }
//         res.status(200).json(updatePerson);
//     } catch (error) {
//         res.status(500).json({message: 'Could not update person.'});
//     }
// });

// First, connect to database
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@backenddb.zkb6dyb.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`)
  .then(() => {
    console.log('Database connected.');

    // Second, connect to Express server  
    app.listen(process.env.EXPRESS_SERVER_PORT, () => {
        console.log(`Server is running on port ${process.env.EXPRESS_SERVER_PORT}.`);
    });
    
})
.catch(() => {
    console.log('Database connection failed.');
});