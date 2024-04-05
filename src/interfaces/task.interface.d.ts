import { Document } from 'mongoose';

interface ITask extends Document {
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export default ITask