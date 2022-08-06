import express from 'express';
import { login, signup } from '../controllers/auth.js';
import { getAllUsers, updateProfile } from '../controllers/UserController.js';
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

router.get('/getAllUser', getAllUsers)
router.patch('/update/:id', authMiddleware, updateProfile)

export default router;