import { instance } from "../index.js";
import crypto from 'crypto';
import { Payment } from "../models/PaymentModel.js";



export const createPayment = async(req, res) =>{
    const options = {
        amount: Number(req.body.amount*100),
        currency: "INR",
    };
    const order = await instance.orders.create(options);
    
    res.status(200).json({success: true, order});
}


export const paymentverification = async(req, res) =>{
  const {  razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto.createHmac("sha256", process.env.SECRET_KEY).update(body.toString()).digest("hex")

//   console.log("sig received", razorpay_signature);
//   console.log("sig generated", expectedSignature);

const isAuthentic = expectedSignature === razorpay_signature;

if(isAuthentic){

    await Payment.create({
        razorpay_order_id, razorpay_payment_id, razorpay_signature
    })

    res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    )
}
else{
    res.status(200).json({
        success: false,
    })
}
}