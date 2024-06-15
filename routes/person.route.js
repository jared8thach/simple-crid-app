const express = require('express');
const router = express.Router();
const { getPeople, addPerson, updatePerson, getPerson } = require('../controllers/person.controller.js');

router.get('/', getPeople);
router.get('/:id', getPerson)
router.post('/', addPerson);
router.put('/:id', updatePerson);

module.exports = router;