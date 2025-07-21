import express from 'express';
import { CategoriesController } from './categories.controller.js';

const router = express.Router();

router.patch('/add-category', CategoriesController.addCategory);
router.get('/', CategoriesController.allCategories);


export const CategoriesRoutes = router;
