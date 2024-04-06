import { Request, Response } from 'express';
import { getTaskById } from '../../services';


export const getTaskByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const taskId = req.params.id;
    const task = await getTaskById(taskId);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    console.error('Error fetching task by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
