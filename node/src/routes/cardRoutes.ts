import express, { Router } from 'express';
import { show, add1, find1, remove1, put } from '../controllers/cardController.js';

const router: Router = express.Router();

router.post('/add', add1);

router.get('/:id', find1);

router.get('/', show);

router.delete('/:id', remove1);

router.put('/:id', put);

export default router;
