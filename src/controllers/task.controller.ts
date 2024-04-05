import { Request, Response } from 'express';
import { createTask, getAllTasks, getTaskById, getTasksByTitle } from '../services/task.services';

export const createTaskController = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

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
