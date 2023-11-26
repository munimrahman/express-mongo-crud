import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

/* 
    /api/users --> create user
    /api/users --> get all users
    /api/users/:userId --> get user by id
    /api/users/:userId --> update user
    /api/users/:userId --> delete user
    // bonus
    /api/users/:userId/orders --> add new product
    /api/users/:userId/orders --> get all orders for a user
    /api/users/:userId/orders/total-price --> calculate total price for a user
*/

router
  .post('/', UserControllers.createUser) // create user
  .get('/', UserControllers.getAllUsers) // get all user
  .get('/:userId/orders', UserControllers.getAllOrdersFromUserId) // get all orders
  .get(
    '/:userId/orders/total-price',
    UserControllers.calculateTotalPriceForUser,
  ) // get total price
  .put('/:userId/orders', UserControllers.addProductToUser) // add new product to order
  .get('/:userId', UserControllers.getUserById) // get user by id
  .put('/:userId', UserControllers.updateUser) // update user
  .delete('/:userId', UserControllers.deleteUserById); // delete user

export const UserRoutes = router;
