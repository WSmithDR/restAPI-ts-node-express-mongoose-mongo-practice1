import express, { Request, Response } from 'express';

const app = express()

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Server raised</h1>');
});





export default app;
