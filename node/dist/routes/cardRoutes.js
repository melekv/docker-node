import express from 'express';
import { add, find, remove, put } from '../controllers/cardController.js';
const router = express.Router();
router.post('/add', add);
router.get('/:id', find);
router.delete('/:id', remove);
router.put('/:id', put);
export default router;
//# sourceMappingURL=cardRoutes.js.map