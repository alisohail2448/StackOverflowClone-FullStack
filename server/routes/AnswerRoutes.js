import express from "express"
import { postAnswer, deleteAnswer } from "../controllers/AnswerController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


router.patch('/post/:id', authMiddleware, postAnswer)
router.patch('/delete/:id', authMiddleware, deleteAnswer)

export default router;