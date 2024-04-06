
import { Username } from "../../../types/auth.types";
import User from "../../models/user.model";

export const getUserByUsername = async (username: Username): Promise<any> => {
  return await User.findOne({ username });
};

