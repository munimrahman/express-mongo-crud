import { Request, Response } from 'express';
// import httpStatus from 'http-status';
// import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
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

export const UserControllers = {
  createUser,
  getAllUsers,
};
