import ITask from "../../interfaces/task.interface";
import Task from "../../models/task.model";

export const getTasksByTitle = async (title: string): Promise<ITask[]> => {
  return await Task.find({ title });
};
