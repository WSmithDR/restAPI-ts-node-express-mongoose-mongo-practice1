import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Task'
    }
  ]
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
