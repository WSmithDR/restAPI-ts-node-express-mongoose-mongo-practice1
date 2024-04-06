import { Request, Response } from 'express';
import { getTasksByTitle } from '../../services/task/getByTitle.service';

export const getTasksByTitleController = async (req: Request, res: Response): Promise<void> => {
  try {
    const title = req.query.title as string;
    const tasks = await getTasksByTitle(title);
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks by title:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
