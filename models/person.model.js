const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter the name of person.'],
            default: 'Billy Bob',
        },
        age: {
            type: Number,
            required: [true, 'Please enter the age of person.'],
            default: 18,
        },
        secret: {
            type: String,
            required: [true, 'Please enter the person\'s deepest, darkest, secret.'],
            default: 'No secret. This person is wholesome.',
        },
        rankings: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;