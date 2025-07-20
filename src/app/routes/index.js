import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route.js';
import { ProductsRoutes } from '../modules/products/products.route.js';
import { CategoriesRoutes } from '../modules/categories/categories.route.js';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/products',
    route: ProductsRoutes,
  },
  {
    path: '/categories',
    route: CategoriesRoutes,
  }
  
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));


export default router;
