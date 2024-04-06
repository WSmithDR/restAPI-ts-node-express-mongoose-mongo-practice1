import ITask from "../../interfaces/task.interface";
import Task from "../../models/task.model";

export const createTask = async (taskData: ITask): Promise<ITask> => {
  return await Task.create(taskData);
};