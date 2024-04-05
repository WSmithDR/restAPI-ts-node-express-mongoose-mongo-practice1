import { Request, Response } from 'express';
import { createUser, getUserByEmail, getUserByUsername } from '../services/user.services';
import { generateToken } from "../utils/jwt.utils";

export const loginController = async (req: Request, res: Response): Promise<any> => {
  try {
    // Extraer email y contraseña del cuerpo de la solicitud
    const { email, password } = req.body;

    // Verificar si el email y la contraseña se proporcionan
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required!' });
    }

    // Attempt to generate an authentication token with email and password
    const token = generateToken(email);

    // If the token is successfully generated, respond with the token
    return res.status(200).json({ token });
  } catch (error) {
    // If an error occurs during the login process, respond with a generic error message
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

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
