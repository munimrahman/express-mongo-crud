import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router
  .get('/', UserControllers.getAllUsers)
  .post('/', UserControllers.createUser);

export const UserRoutes = router;
