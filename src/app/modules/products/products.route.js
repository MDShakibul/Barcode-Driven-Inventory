import express from 'express';
import { ProductsController } from './products.controller.js';
import auth from '../../middlewares/auth.js';

const router = express.Router();

router.patch('/add-product', ProductsController.addProducts);
router.get('/product-details/:barcode', ProductsController.productDetail);
router.patch('/:id', ProductsController.updateProductCategory);
router.get('/', auth(), ProductsController.allProducts);


export const ProductsRoutes = router;
