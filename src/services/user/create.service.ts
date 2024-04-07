
import { IUser } from "../../interfaces/user.interface";
import User from "../../models/user.model";
import { hashPassword } from "../../utils/hashPassword.util";

export const createUser = async ({ email, username, password }: IUser): Promise<IUser | void> => {
  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create new user
  const newUser = new User({ email, username, password: hashedPassword });
  await newUser.save();
  // Convert Mongoose document to plain JavaScript object
  return newUser.toObject(); 
};