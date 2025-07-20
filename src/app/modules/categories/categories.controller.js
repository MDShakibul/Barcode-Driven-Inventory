
import catchAsync from '../../../shared/catchAsync.js';
import sendResponse from '../../../shared/sendResponse.js';
import { CategoriesService } from './categories.service.js';
import httpStatus from 'http-status';


const addCategory = catchAsync(async (req, res) => {
  const { ...categoryData } = req.body;

  const result = await CategoriesService.addCategory(categoryData);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Add Categories Successfully',
    data: result,
  });
});

const allCategories = catchAsync(async (req, res) => {

  const result = await CategoriesService.allCategories();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved successfully',
    data: result,
  });
});




export const CategoriesController = {
  addCategory,
  allCategories
};
