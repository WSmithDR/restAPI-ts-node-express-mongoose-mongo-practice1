
import { IUser } from "../../interfaces/user.interface";
import User from "../../models/user.model";


export const getUsers = async (): Promise<IUser[]> => {
  try {
    const users = await User.find().populate({ path: 'tasks', model: 'Task' }).exec()
    return users;
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching users:', error);
    throw error;
  }
};