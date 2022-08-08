import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCrown, faFaceGrin, faFaceGrinStars } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import './PriceCars.css'


const PriceCard = () => {

  const currentUser = useSelector((state) => state.currentUserReducer);
  // console.log(currentUser)
  const navigate = useNavigate();
  const amount1  = 10;
  const amount2  = 20;

  const PayStandard = async (amount) =>{
    const {data: {key}} = await axios.get("http://localhost:5000/api/getkey");
    const {data: {order}} = await axios.post("http://localhost:5000/api/pay", {amount})


    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Sohail Ali",
      description: "Stack Overflow Clone",
      image: "https://example.com/your_logo",
      order_id: order.id,
      callback_url: "http://localhost:5000/api/paymentverification",
      prefill: {
          name: currentUser.name,
          email: currentUser.result.email,
          contact: "9999999999"
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          color: "#e77921"
      }
  };
  const razor = new window.Razorpay(options);
      razor.open();
  }
  
  
  const PayPremium = async (amount) =>{
    const {data: {key}} = await axios.get("http://localhost:5000/api/getkey");
    const {data: {order}} = await axios.post("http://localhost:5000/api/pay", {amount})

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Sohail Ali",
      description: "Stack Overflow Clone",
      image: "https://example.com/your_logo",
      order_id: order.id,
      callback_url: "http://localhost:5000/api/paymentverification",
      prefill: {
          name: currentUser.name,
          email: currentUser.result.email,
          contact: "9999999999"
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          color: "#e77921"
      }
  };
  const razor = new window.Razorpay(options);
      razor.open();
  }
  

const payZero = () =>{
  navigate('/AskQuestion')
}

  return (
    <div className="home-container">
      <div className="price-container">
        <div className="priceCard">
         <div className="heading">
         <h4><FontAwesomeIcon icon={faFaceGrin} /> Basic Questions</h4>
          <p className='subline'>You can Freely Ask Questions</p>
         </div>
         <div className="price">
         <h2>$0</h2>
         <p>/Month</p> 
         </div>

         <div className="list">
         <p><FontAwesomeIcon icon={faCircleCheck} /> Some Basic Features</p>
         <p><FontAwesomeIcon icon={faCircleCheck} /> For Ask basic questions</p>

         <div className="button">
         <button className="priceButton" onClick={payZero} >PAY $0</button>
         </div>
         </div>
        </div>
        <div className="priceCard-main">
         <div className="heading">
         <h4><FontAwesomeIcon icon={faFaceGrinStars} /> Standard Questions</h4>
          <p className='subline'>Means Standard Questions</p>
         </div>
        <div className="price">
        <h2>${amount1}</h2>
        <p>/Month</p> 
        </div>
         <div className="list">
         <p><FontAwesomeIcon icon={faCircleCheck} /> Some standard features</p>
         <p><FontAwesomeIcon icon={faCircleCheck} /> For Ask standard questions</p>

         <div className="button">
         <button className="priceButton-main" onClick={()=> PayStandard(amount1)} >PAY $10</button>
         </div>
         </div>
        </div>
        <div className="priceCard">
          <div className="heading">
          <h4><FontAwesomeIcon icon={faCrown} /> Premium Questions</h4>
          <p className='subline'>Means Premium Questions</p>
          </div>
          <div className="price">
          <div className="price"><h2>${amount2}</h2></div>
          <p>/Month</p> 
          </div>

         <div className="list">
         <p><FontAwesomeIcon icon={faCircleCheck} /> Some Advanced Features</p>
         <p><FontAwesomeIcon icon={faCircleCheck} /> For Ask premium questions</p>

         <div className="button">
         <button className="priceButton" onClick={()=> PayPremium(amount2)} >PAY $20</button>
         </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default PriceCard