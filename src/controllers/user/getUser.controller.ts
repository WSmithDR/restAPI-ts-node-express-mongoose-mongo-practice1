import { Request, Response } from 'express';
import { getUsers } from '../../services';

export const getUsersController = async (_req: Request, res: Response): Promise<void> => {
  try {
    // Call the getUsers service function to fetch users
    const users = await getUsers();

    // Send the users as a response
    res.status(200).json(users);
  } catch (error) {
    // Handle any errors
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
