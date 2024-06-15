const Person = require('../models/person.model.js');

// get all people
const getPeople = async (req, res) => {
    try {
        const people = await Person.find({});
        if (!people) {
            return res.status(500).json({message: 'People could not be found.'});
        }
        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({message: 'People could not be found.'});
    }
};

// get a person
const getPerson = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await Person.findById(id);
        if (!person) {
            return res.status(500).json({message: 'Could not find person.'});
        }
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({message: 'Could not get person.'});
    };
};

// add a person
const addPerson = async (req, res) => {
    try {
        const addPerson = await Person.create(req.body);
        if (!addPerson) {
            return res.status(500).json({message: 'Could not add person.'});
        }
        res.status(200).json(addPerson);
    } catch (error) {
        res.status(500).json({message: 'Could not add person.'});
    }
};

// update a person
const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const updatePerson = await Person.findByIdAndUpdate(id, req.body);
        if (!updatePerson) {
            return res.status(500).json({message: 'Could not update person.'});
        }
        res.status(200).json(updatePerson);
    } catch (error) {
        res.status(500).json({message: 'Could not update person.'});
    }
};

// delete a person
const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const deletePerson = await Person.findByIdAndDelete(id);
        if (!deletePerson) {
            return res.status(500).json({message: 'Could not delete person.'});
        }
        res.status(200).json({message: 'Person deleted'});
    } catch {
        res.status(500).json({message: 'Could not delete person.'});
    }
};

module.exports = {
    getPeople,
    getPerson,
    addPerson,
    updatePerson,
    deletePerson,
};