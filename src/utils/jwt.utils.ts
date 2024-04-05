import jwt from 'jsonwebtoken';
import { Email } from '../../types/auth.types';

const jwtSecret = 'your_jwt_secret';

export const generateToken = (email: Email): string => {
  const payload = {
    email
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
};
