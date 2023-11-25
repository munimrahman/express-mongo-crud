import { IUser } from './user.interface';
import User from './user.model';

const createUser = async (data: IUser) => {
  const result = await User.create(data);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

export const UserServices = {
  createUser,
  getAllUsers,
};
