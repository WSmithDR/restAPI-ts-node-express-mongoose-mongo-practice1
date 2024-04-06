import ITask from "../../interfaces/task.interface";
import Task from "../../models/task.model";

export const getTaskById = async (taskId: string): Promise<ITask | null> => {
  return await Task.findById(taskId);
};
