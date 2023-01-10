import express from 'express';
import { show, add, find, remove, put } from '../controllers/cardController.js';

const router = express.Router();

router.post('/add', add);

router.get('/:id', find);

router.get('/', show);

router.delete('/:id', remove);

router.put('/:id', put);

module.exports = router;
