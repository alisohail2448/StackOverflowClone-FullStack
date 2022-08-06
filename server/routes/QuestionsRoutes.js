import express from "express";
import {
  AskQuestion,
  getAllQuestions,
  deleteQuestion,
  voteQuestion,
} from "../controllers/QuestionCon.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/Ask", authMiddleware, AskQuestion);
router.get("/get", getAllQuestions);
router.delete("/delete/:id", authMiddleware, deleteQuestion);
router.patch("/vote/:id", authMiddleware, voteQuestion);

export default router;
