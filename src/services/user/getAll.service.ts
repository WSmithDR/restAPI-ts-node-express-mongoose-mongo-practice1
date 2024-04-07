
import User from "../../models/user.model";


/*export const getUsers = async (): Promise<IUser[]> => {
  try {
    const users = await User.find().populate({ path: 'tasks', model: 'Task' }).exec()
    return users;
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching users:', error);
    throw error;
  }
};*/

export const getUsers = async () => {
  try {
    const users = await User.find({})
      .populate('tasks') // Poblar la lista de tareas del usuario
      .exec();

    return users;
  } catch (error) {
    throw new Error('Error fetching users');
  }
}