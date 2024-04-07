import ITask from "../../interfaces/task.interface";
import Task from "../../models/task.model";


export const getAllTasks = async (page: number, limit: number): Promise<{ tasks: ITask[], total: number }> => {
  try {
    const tasks = await Task.find({})
      .populate('createdBy') // Poblar la referencia al usuario
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const total = await Task.countDocuments();

    return { tasks, total };
  } catch (error) {
    throw new Error('Error fetching tasks');
  }
};