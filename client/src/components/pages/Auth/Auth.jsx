import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../../../actions/authAction';
import icon from "../../../assets/loginStack.png"
import AboutAuth from './AboutAuth';
import "./Auth.css"

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSwitch = () =>{
    setIsSignup(!isSignup);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!email && !password){
      alert("Enter Email & Password...")
    }
    if(isSignup){
      if(!name){
        alert("Enter a name to Continue...")
      }
      dispatch(signup({name, email, password, address}, navigate))
    }
    else{
      dispatch(login({email, password}, navigate))
    }
    // console.log({name, email, password});
  }



  return (
    <section className="auth-section">
      {
        isSignup && <AboutAuth/>
      }
      <div className="auth-container-2">
        {
          !isSignup && <img width="50px" src={icon} alt="stack Overflow" className='login-logo' />
        }
        <form onSubmit={handleSubmit} >
          {
            isSignup && (
              <label htmlFor="name">
                 <h4>Display Name</h4>
            <input className='checked' type="name" name='name' id='name' onChange={(e) => {setName(e.target.value)}} />
              </label>
            )
          }

          <label htmlFor="email">
            <h4>Email</h4>
            <input className='checked' type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}} />
          </label>

          {
            isSignup && (
              <label htmlFor="address">
                 <h4>Display Address</h4>
            <input className='checked' type="address" name='address' id='address' onChange={(e) => {setAddress(e.target.value)}} />
              </label>
            )
          }

          <label htmlFor="password">
          <div style={{display: 'flex', justifyContent:'space-between'}} >
          <h4>Password</h4>
           { !isSignup && <p style={{color: "#007ac6", fontSize: '13px'}} >Forgot Password?</p>}
          </div>
            <input className='checked' type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}} />
            
            {
              isSignup && <p style={{color: "#666767", fontSize: '13px'}}>Passwords must contain at least eight <br/> characters, including at least 1 letter and 1 <br/> number. </p>
            }
          </label>
          <div className="check">
          {
            isSignup && (
                <label htmlFor="check">
                <input className='checked' type="checkbox" id="check" />
                <p style={{fontSize: '13px'}}>Opt-in to receive occasional <br/>product updates, user research invitations,<br/> company announcements, and digests.</p>
              </label>
            )
          }
          </div>
          <button type='submit' className="auth-btn">{isSignup ? "Sign Up" : "Login"}</button>
          {
              isSignup && <p style={{color: "#666767", fontSize: '13px'}} >By clicking “Sign up”, you agree to our 
                <span style={{color: "#007ac6"}} >terms of<br/> service</span>, 
                <span style={{color: "#007ac6"}} >privacy policy</span> and <span style={{color: "#007ac6"}} >cookie policy </span> </p>
            }
        </form>
        <p>
          {
            isSignup ? "Already have an account?" : "Don't have an account"
          }
          <button type='button' className="handle-switch-btn" onClick={handleSwitch} >
            {
              isSignup ? "Log in" : "Sign up"
            }
          </button>
        </p>
      </div>
    </section>
  )
}

export default Auth