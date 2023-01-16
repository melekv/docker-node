import express, { Router } from 'express';
import { add, find, remove, put } from '../controllers/cardController.js';

const router: Router = express.Router();

router.post('/add', add);

router.get('/:id', find);

router.delete('/:id', remove);

router.put('/:id', put);

export default router;
