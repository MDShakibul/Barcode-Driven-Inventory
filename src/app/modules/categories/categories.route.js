import express from 'express';
import { CategoriesController } from './categories.controller.js';
import auth from '../../middlewares/auth.js';

const router = express.Router();

router.patch('/add-category', auth(), CategoriesController.addCategory);
router.get('/', CategoriesController.allCategories);


export const CategoriesRoutes = router;
