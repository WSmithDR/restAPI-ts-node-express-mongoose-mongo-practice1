// Importa los módulos necesarios
import mongoose, { Schema } from 'mongoose';
import ITask from '../interfaces/task.interface';

const TaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'in-progress'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencia al modelo de usuario
    required: true,
  },
});

const Task = mongoose.model<ITask>('Task', TaskSchema);
export default Task;