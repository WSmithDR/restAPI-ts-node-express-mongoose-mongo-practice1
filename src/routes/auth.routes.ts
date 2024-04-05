import express from 'express';
import { loginController, registerController } from '../controllers/auth.controller';
import { authenticateJwt } from '../middlewares/auth.middleware';

const authRoutes = express.Router();

authRoutes.post('/login', loginController);
authRoutes.post('/register', registerController);
authRoutes.get('/protected-route', authenticateJwt, (_req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

export default authRoutes;
