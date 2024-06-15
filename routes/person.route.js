const express = require('express');
const router = express.Router();
const { getPeople, addPerson, updatePerson } = require('../controllers/person.controller.js');

router.get('/', getPeople);
router.post('/', addPerson);
router.put('/:id', updatePerson);

module.exports = router;