const express = require('express');
const router = express.Router();
const { getPeople, addPerson, updatePerson, getPerson, deletePerson } = require('../controllers/person.controller.js');

router.get('/', getPeople);
router.get('/:id', getPerson)
router.post('/', addPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;