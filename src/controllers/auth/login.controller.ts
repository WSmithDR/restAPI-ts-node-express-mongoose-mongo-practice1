import { Request, Response } from 'express';
import { generateToken } from "../../utils/jwt.utils";

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