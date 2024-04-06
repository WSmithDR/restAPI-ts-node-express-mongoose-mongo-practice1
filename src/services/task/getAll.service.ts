import ITask from "../../interfaces/task.interface";
import Task from "../../models/task.model";


export const getAllTasks = async (page: number = 1, limit: number = 10): Promise<{ tasks: ITask[], total: number }> => {
  const total = await Task.countDocuments();
  const tasks = await Task.find()
                          .skip((page - 1) * limit)
                          .limit(limit);
  return { tasks, total };
};
