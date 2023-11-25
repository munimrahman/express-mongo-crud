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
  .post('/', UserControllers.createUser)
  .get('/', UserControllers.getAllUsers)
  .get('/:userId', () => {})
  .put('/:userId', () => {})
  .delete('/:userId', () => {});

export const UserRoutes = router;
