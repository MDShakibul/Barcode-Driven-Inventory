import express from 'express';
import { CategoriesController } from './categories.controller.js';
import auth from '../../middlewares/auth.js';

const router = express.Router();

router.patch('/add-category', CategoriesController.addCategory);
router.get('/', auth(), CategoriesController.allCategories);


export const CategoriesRoutes = router;
