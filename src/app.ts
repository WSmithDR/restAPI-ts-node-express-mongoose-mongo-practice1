import express, { Request, Response } from 'express';
import taskRoutes from './routes/task.routes';

const app = express();

app.use(express.json());


app.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Welcome to my REST API!</h1>');
});


app.use('/tasks', taskRoutes)

export default app;
