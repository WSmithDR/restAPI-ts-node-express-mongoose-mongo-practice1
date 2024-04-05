// Import necessary modules
import mongoose, { Schema } from 'mongoose';
import ITask from '../interfaces/task.interface';


// Define the mongoose schema for the task
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
});

// Create and export the Task model
const Task = mongoose.model<ITask>('Task', TaskSchema);
export default Task;
