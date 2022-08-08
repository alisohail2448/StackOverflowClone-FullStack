import express from 'express'
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import userRoutes from "./routes/users.js"
import questionRoutes from "./routes/QuestionsRoutes.js"
import answerRoutes from "./routes/AnswerRoutes.js"
import paymentRoute from "./routes/PaymentRoute.js"


import Razorpay from 'razorpay'


const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());





app.get('/', (req,res) =>{
    res.send("This is stack overflow clone API")
})

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes);
app.use('/api', paymentRoute);

app.get("/api/getkey", (req,res) =>{
  res.status(200).json({key: process.env.KEY_ID})
})



const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL 



//RAZORPAY

export const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.SECRET_KEY,
  });

//RAZORPAY


mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)})).catch((err) => console.log(err.message));