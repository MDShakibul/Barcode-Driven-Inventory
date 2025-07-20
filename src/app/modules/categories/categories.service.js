
import { Category } from './categories.model.js';

const addCategory = async (payload) => {
	const result = await Category.create(payload);

	return result;
};
const allCategories = async () => {
	const result = await Category.find();

	return result;
};

export const CategoriesService = {
	addCategory,
	allCategories
};
