import express from "express"
import { createPayment, paymentverification } from "../controllers/PaymentController.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();


router.post('/pay',  authMiddleware, createPayment)
router.post('/paymentverification', paymentverification)

export default router;