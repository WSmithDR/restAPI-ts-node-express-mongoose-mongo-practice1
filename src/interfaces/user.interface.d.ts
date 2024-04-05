import { Email, Password, Username } from './../../types/auth.types.d';


export interface IUser extends Document {
  username: Username;
  password: Password;
  email: Email
}

export interface IloggedUser extends Omit<IUser,'username'>{}

