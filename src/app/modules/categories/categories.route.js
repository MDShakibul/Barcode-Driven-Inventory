import express from 'express';
import { CategoriesController } from './categories.controller.js';

const router = express.Router();

router.post('/add-category', CategoriesController.addCategory);
router.get('/all-categories', CategoriesController.allCategories);


export const CategoriesRoutes = router;
