import httpStatus from 'http-status';
import config from '../../../config/index.js';
import ApiError from '../../../errors/ApiError.js';
import { jwtHelpers } from '../../../helpers/jwtHelpers.js';
import { User } from '../auth/auth.model.js';

const createUser = async (payload) => {
	const result = await User.create(payload);

	// create accesstoken and refresh token
	const { _id, email: userEmailNumber } = result;
	const accessToken = jwtHelpers.createToken(
		{ _id, userEmailNumber },
		config.jwt.secret,
		config.jwt.expires_in
	);
	const refreshToken = jwtHelpers.createToken(
		{ _id, userEmailNumber },
		config.jwt.refresh_secret,
		config.jwt.refresh_expires_in
	);

	const resultWithTokens = {
		...result.toObject(),
		accessToken,
		refreshToken,
	};

	return resultWithTokens;
};

const loginUser = async (payload) => {
	const { email, password } = payload;

	const user = new User();
	const isUserExist = await user.isUserExist(email);

	if (!isUserExist) {
		throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
	}

	if (
		(await user.isPasswordMatched(password, isUserExist?.password)) === false
	) {
		throw new ApiError(httpStatus.UNAUTHORIZED, 'Password does not match');
	}

	// create accesstoken and refresh token
	const { _id, email: userEmailNumber } = isUserExist;
	const accessToken = jwtHelpers.createToken(
		{ _id, userEmailNumber },
		config.jwt.secret,
		config.jwt.expires_in
	);
	const refreshToken = jwtHelpers.createToken(
		{ _id, userEmailNumber },
		config.jwt.refresh_secret,
		config.jwt.refresh_expires_in
	);

	return {
		accessToken,
		refreshToken,
	};
};

export const AuthService = {
	createUser,
	loginUser,
};
