/* eslint-disable no-unused-vars */

import config from '../../../config/index.js';
import catchAsync from '../../../shared/catchAsync.js';
import sendResponse from '../../../shared/sendResponse.js';
import { ProductsService } from './auth.service.js';
import httpStatus from 'http-status';


const addProducts = catchAsync(async (req, res) => {
  const { ...userData } = req.body;
  
  const result = await ProductsService.addProduct(userData);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Add Products successfully',
    data: result,
  });
});







export const AuthController = {
  addProducts
};
