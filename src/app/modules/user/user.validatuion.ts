import { z } from 'zod';

const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const OrderSchema = z.object({
  productName: z.string(),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  quantity: z.number().min(1, { message: 'Quantity must be at least 1' }),
});

const UserValidationSchema = z.object({
  userId: z
    .number()
    .positive({ message: 'User ID must be a positive integer' }),
  username: z.string().min(1, { message: 'Username cannot be empty' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number().positive({ message: 'Age must be a positive integer' }),
  email: z.string().email({ message: 'Invalid email address' }),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: AddressSchema,
  orders: z.array(OrderSchema),
});

export default UserValidationSchema;
