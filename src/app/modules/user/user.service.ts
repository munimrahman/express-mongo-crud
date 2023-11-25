import { IOrder, IUser } from './user.interface';
import User from './user.model';

const createUser = async (data: IUser) => {
  const result = await User.create(data);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

const getUserById = async (userId: number) => {
  const result = await User.findOne({ userId: userId });
  return result;
};

const updateUser = async ({ data, id }: { data: IUser; id: number }) => {
  const result = await User.updateOne({ userId: id }, data, {
    new: true,
    runValidators: true,
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
  return { productData, userId };
};

const getAllOrdersByUserId = async (userId: number) => {
  return `All orders for ${userId}`;
};

const calculateTotalPriceOfSpecificUSer = async (userId: number) => {
  return `Tottal price for ${userId}`;
};

export const UserServices = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addProductToSpecificUser,
  getAllOrdersByUserId,
  calculateTotalPriceOfSpecificUSer,
};
