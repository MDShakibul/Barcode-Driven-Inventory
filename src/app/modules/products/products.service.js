
import { Product } from './products.model.js';

const addProduct = async (payload) => {
	const result = await Product.create(payload);

	return result;
};
const allProducts = async () => {
	const result = await Product.find();

	return result;
};

export const ProductsService = {
	addProduct,
	allProducts
};
