const express = require('express');
const router = express.Router();

const cardController = require('../controllers/cardController.js');

router.post('/add', cardController.add);

router.get('/:id', cardController.find);

router.get('/', cardController.show);

router.delete('/:id', cardController.remove);

router.put('/:id', cardController.put);

module.exports = router;