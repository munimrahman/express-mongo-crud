import { IOrder, IUser } from './user.interface';
import User from './user.model';

const createUser = async (data: IUser) => {
  const result = await User.create(data);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find({}).select(
    'username fullName email age address -_id',
  );
  return result;
};

const getUserById = async (userId: number) => {
  const result = await User.findOne({ userId: userId }).select('-password');
  return result;
};

const getUserByUsername = async (username: string) => {
  const result = await User.findOne({ username: username });
  return result;
};

const updateUser = async ({ data, id }: { data: IUser; id: number }) => {
  const result = await User.findOneAndUpdate({ userId: id }, data, {
    new: true,
    runValidators: true,
    select: '-password',
  });
  return result;
};

const deleteUser = async (id: number) => {
  const result = await User.deleteOne({ userId: id });
  return result;
};

const addProductToSpecificUser = async ({
  productData,
  userId,
}: {
  productData: IOrder;
  userId: number;
}) => {
  const res = await User.findOneAndUpdate(
    { userId },
    { $push: { orders: productData } },
    { new: true, runValidators: true, select: '-password' },
  );
  return res;
};

const getAllOrdersByUserId = async (userId: number) => {
  const result = await User.findOne({ userId: userId }).select('orders -_id');
  return result;
};

const calculateTotalPriceOfSpecificUSer = async (userId: number) => {
  return `Tottal price for ${userId}`;
};

export const UserServices = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByUsername,
  updateUser,
  deleteUser,
  addProductToSpecificUser,
  getAllOrdersByUserId,
  calculateTotalPriceOfSpecificUSer,
};
