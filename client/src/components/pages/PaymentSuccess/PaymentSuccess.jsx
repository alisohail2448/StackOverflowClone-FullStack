import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './PaymentSuccess.css'

const PaymentSuccess = () => {

    const searchQuery = useSearchParams()[0]
    const referenceNum = searchQuery.get("reference")
    const navigate = useNavigate()

    const AskQuestion = () =>{
        navigate("/AskQuestion");
    }
  return (
    <div className="payment">
    
                <h1>PAYMENT SUCCESSFULL</h1>

                <h4>
                    Reference No : {referenceNum}
                </h4>
                <button className="ask" onClick={AskQuestion} >Ask Question {">"} </button>
        </div>
  )
}

export default PaymentSuccess