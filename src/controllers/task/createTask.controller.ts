import { Request, Response } from 'express';
import { createTask } from '../../services';

export const createTaskController = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};