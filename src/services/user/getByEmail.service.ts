
import { Email } from "../../../types/auth.types";
import { IUser } from "../../interfaces/user.interface";
import User from "../../models/user.model";

export const getUserByEmail = async (email: Email): Promise<IUser|null> => {
  return await User.findOne({ email });
};