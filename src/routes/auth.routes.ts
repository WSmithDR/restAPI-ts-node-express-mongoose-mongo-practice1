import express from 'express';
import { registerController } from '../controllers';
import { authenticateJwt } from '../middlewares/auth.middleware';
import { loginController } from './../controllers/auth/login.controller';

const authRoutes = express.Router();

authRoutes.post('/login', loginController);
authRoutes.post('/register', registerController);
authRoutes.get('/protected-route', authenticateJwt, (_req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

export default authRoutes;
