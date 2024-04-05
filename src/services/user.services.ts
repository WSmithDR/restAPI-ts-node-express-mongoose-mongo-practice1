
import { Email, Username } from "../../types/auth.types";
import { IUser } from "../interfaces/user.interface";
import User from "../models/user.model";
import { hashPassword } from "../utils/bcrypt.utils";


export const getUserByUsername = async (username: Username): Promise<any> => {
  return await User.findOne({ username });
};

export const getUserByEmail = async (email: Email): Promise<IUser|null> => {
  return await User.findOne({ email });
};


export const createUser = async ({ email, username, password }: IUser): Promise<IUser | void> => {
  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create new user
  const newUser = new User({ email, username, password: hashedPassword });
  await newUser.save();
  // Convert Mongoose document to plain JavaScript object
  return newUser.toObject(); 
};
