import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config/index.js';

const userSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, select: false },
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
		},
	}
);


userSchema.pre('save', async function (next) {
	this.password = await bcrypt.hash(
		this.password,
		Number(config.bcrypt_salt_rounds)
	);
	next();
});

userSchema.methods.isUserExist = async function (email) {
	return await User.findOne({ email }, { _id: 1, password: 1, email: 1 });
};

userSchema.methods.isPasswordMatched = async function (
	givenPassword,
	savedPassword
) {
	return await bcrypt.compare(givenPassword, savedPassword);
};

export const User = model('User', userSchema);
