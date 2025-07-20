/* eslint-disable no-unused-vars */

import config from '../../../config/index.js';
import catchAsync from '../../../shared/catchAsync.js';
import sendResponse from '../../../shared/sendResponse.js';
import { AuthService } from './auth.service.js';
import httpStatus from 'http-status';


const createUser = catchAsync(async (req, res) => {
  const { ...userData } = req.body;
  const result = await AuthService.createUser(userData);

    const { refreshToken, password, ...others } = result;
  


  const cookieOption = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOption);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: others,
  });
});



const loginUser = catchAsync(async (req, res) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);

  const { refreshToken, ...others } = result;

 

  const cookieOption = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOption);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: others,
  });
});


const logoutUser = catchAsync(async (req, res) => {
  res.clearCookie('refreshToken');

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logout in successfully',
    data: null
  });
});



export const AuthController = {
  createUser,
  loginUser,
  logoutUser
};
