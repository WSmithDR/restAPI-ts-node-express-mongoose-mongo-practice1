import express from 'express';
import { getUsersController } from '../controllers/user/getUser.controller';

const userRoutes = express.Router();

userRoutes.get('/users', getUsersController);


export default userRoutes;
