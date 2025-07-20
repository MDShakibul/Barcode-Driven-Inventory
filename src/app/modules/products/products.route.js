import express from 'express';
import { ProductsController } from './products.controller.js';

const router = express.Router();

router.post('/add-product', ProductsController.addProducts);
router.get('/all-products', ProductsController.allProducts);


export const ProductsRoutes = router;
