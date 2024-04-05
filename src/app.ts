import express, { Request, Response } from 'express';
import authRoutes from './routes/auth.routes';
import taskRoutes from './routes/task.routes';

const app = express();

app.use(express.json());


app.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Welcome to my REST API!</h1>');
});


app.use('/tasks', taskRoutes)
app.use('/auth', authRoutes)

export default app;
