import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import env from "../config/env";


export const authenticateMiddleware = (req:Request, res:Response, next:NextFunction) => {
  // Verificar si hay un token en el encabezado de autorización
  const token = req.headers.authorization;
  const jwtSecret = env.jwtSecret
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verificar y decodificar el token
  try {
    const decoded = jwt.verify(token, jwtSecret); // Aquí 'SECRET_KEY' es tu clave secreta para firmar el token
    if(!decoded) res.status(401).json({ message: 'Unauthorized: Error decoding the token' });
    // Los datos del usuario están en 'decoded', puedes hacer lo que necesites con ellos

    // Continuar con la siguiente función de middleware o controlador
    next();
  } catch (error) {
    // Si hay algún error al verificar el token, responde con un error de autenticación
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
