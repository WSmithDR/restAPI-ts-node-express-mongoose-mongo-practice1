import { Request, Response } from 'express';
import { getAllTasks } from '../../services';

export const getAllTasksController = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const { tasks, total } = await getAllTasks(page, limit);

    res.status(200).json({
      tasks,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};