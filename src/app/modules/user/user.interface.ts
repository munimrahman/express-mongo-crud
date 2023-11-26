import { Model } from 'mongoose';

/* eslint-disable no-unused-vars */
interface IAddress {
  street: string;
  city: string;
  country: string;
}

interface IOrder {
  productName: string;
  price: number;
  quantity: number;
}

interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: IAddress;
  orders: IOrder[];
}

interface UserModel extends Model<IUser> {
  isUserExists(id: string): Promise<IUser | null>;
}

export { IAddress, IOrder, IUser, UserModel };
