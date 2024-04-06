import express from 'express';
import { createTaskController, getAllTasksController, getTaskByIdController, getTasksByTitleController } from '../controllers';


const router = express.Router();

router.post('/', createTaskController);
router.get('/', getAllTasksController);
router.get('/:id', getTaskByIdController);
router.get('/search', getTasksByTitleController);

export default router;
