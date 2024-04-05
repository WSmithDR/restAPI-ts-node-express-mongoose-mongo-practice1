import ITask from "../interfaces/task.interface";
import Task from "../models/task.model";



export const createTask = async (taskData: ITask): Promise<ITask> => {
  return await Task.create(taskData);
};

export const getAllTasks = async (page: number = 1, limit: number = 10): Promise<{ tasks: ITask[], total: number }> => {
  const total = await Task.countDocuments();
  const tasks = await Task.find()
                          .skip((page - 1) * limit)
                          .limit(limit);
  return { tasks, total };
};


export const getTaskById = async (taskId: string): Promise<ITask | null> => {
  return await Task.findById(taskId);
};

export const getTasksByTitle = async (title: string): Promise<ITask[]> => {
  return await Task.find({ title });
};
