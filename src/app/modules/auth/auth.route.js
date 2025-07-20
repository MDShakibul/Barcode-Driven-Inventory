import express from 'express';
import { AuthController } from './auth.controller.js';

const router = express.Router();

router.post('/signup', AuthController.createUser);

router.post('/login', AuthController.loginUser);
router.post('/logout', AuthController.logoutUser);

export const AuthRoutes = router;
