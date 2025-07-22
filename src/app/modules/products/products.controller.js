/* eslint-disable no-unused-vars */

import axios from 'axios';
import catchAsync from '../../../shared/catchAsync.js';
import sendResponse from '../../../shared/sendResponse.js';
import { ProductsService } from './products.service.js';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError.js';


const addProducts = catchAsync(async (req, res) => {
  const { ...productData } = req.body;
  //const { _id: userId, ...userInfo } = req.user

  const result = await ProductsService.addProduct(productData);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Add Products successfully',
    data: result,
  });
});

const productDetail = catchAsync(async (req, res) => {
  const { barcode } = req.params; 


  const result = await axios.get(`https://products-test-aci.onrender.com/product/${barcode}`);
  if (result?.data?.error === 'Item not found') {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found with the given barcode');
  }

  

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Fetched product successfully',
    data: result?.data?.product,
  });
});

const updateProductCategory = catchAsync(async (req, res) => {
  const { category } = req.body;
  const result = await ProductsService.updateProductCategory(req.params.id, category);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const allProducts = catchAsync(async (req, res) => {

  const result = await ProductsService.allProducts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  });
});




export const ProductsController = {
  addProducts,
  productDetail,
  allProducts,
  updateProductCategory
};
