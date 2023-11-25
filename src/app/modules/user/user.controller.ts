/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
// import httpStatus from 'http-status';
// import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import UserValidationSchema from './user.validatuion';

const createUser = async (req: Request, res: Response) => {
  try {
    const data = UserValidationSchema.parse(req.body);

    const result = await UserServices.createUser(data);

    const { password: pwd, ...others } = result.toObject();

    res.status(200).send({
      success: true,
      message: 'Successfully Created User',
      data: others,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Successfully Get Data',
      data: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsers();

    res.status(200).send({
      success: true,
      message: 'Successfully Get Data',
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

const getUserById = async (req: Request, res: Response) => {
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
