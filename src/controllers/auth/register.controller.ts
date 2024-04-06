import { Request, Response } from 'express';
import { createUser, getUserByEmail, getUserByUsername } from '../../services';

export const registerController = async (req: Request, res: Response) => {
  try {
    // Check if username already exists
    const existingUser = await getUserByUsername(req.body.username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Check if email already exists using getUserByEmail
    const existingEmail = await getUserByEmail(req.body.email);
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // If username and email are unique, create a new user
    const newUser = await createUser(req.body);

    // Respond with success message and the new user data
    res.status(201).json({ message: 'User registered successfully', newUser });
  } catch (error) {
    // If an error occurs during the registration process, respond with a generic error message
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
