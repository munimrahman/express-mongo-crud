/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
// import httpStatus from 'http-status';
// import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import UserValidationSchema from './user.validatuion';
import User from './user.model';

const createUser = async (req: Request, res: Response) => {
  try {
    const data = UserValidationSchema.parse(req.body);
    const userIdAlreadyExist = await UserServices.getUserById(req.body.userId);

    // check user id already exists
    if (userIdAlreadyExist) {
      res.status(400).send({
        success: true,
        message: 'userId already exists!',
        error: {
          code: 400,
          description: 'Please Provide a Unique User Id.',
        },
      });
      return;
    }

    const userNameAlreadyExist = await UserServices.getUserByUsername(
      req.body.username,
    );

    // check user name already exists
    if (userNameAlreadyExist) {
      res.status(400).send({
        success: true,
        message: 'username already exists!',
        error: {
          code: 400,
          description: 'Please Provide a Unique username.',
        },
      });
      return;
    }

    const result = await UserServices.createUser(data);

    const { password: pwd, ...others } = result.toObject();

    res.status(200).send({
      success: true,
      message: 'User created successfully!',
      data: others,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Can not create user',
      error,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsers();

    res.status(200).send({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Can not fetched users.',
      error: {
        code: 500,
        description: err,
      },
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const isUserExists = await User.isUserExists(userId);
    console.log(isUserExists);

    const result = await UserServices.getUserById(Number(userId));

    res.status(200).send({
      success: true,
      message: 'Successfully Created User',
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Successfully Get Data',
      data: err,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createUser(req.body);

    res.status(200).send({
      success: true,
      message: 'Successfully Created User',
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Successfully Get Data',
      data: err,
    });
  }
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createUser(req.body);

    res.status(200).send({
      success: true,
      message: 'Successfully Created User',
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Successfully Get Data',
      data: err,
    });
  }
};

const addProductToUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createUser(req.body);

    res.status(200).send({
      success: true,
      message: 'Successfully Created User',
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Successfully Get Data',
      data: err,
    });
  }
};

const getAllOrdersFromUserId = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createUser(req.body);

    res.status(200).send({
      success: true,
      message: 'Successfully Created User',
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Successfully Get Data',
      data: err,
    });
  }
};

const calculateTotalPriceForUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createUser(req.body);

    res.status(200).send({
      success: true,
      message: 'Successfully Created User',
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Successfully Get Data',
      data: err,
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUserById,
  addProductToUser,
  getAllOrdersFromUserId,
  calculateTotalPriceForUser,
};
