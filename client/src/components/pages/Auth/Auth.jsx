import React, { useState } from 'react'
import icon from "../../../assets/loginStack.png"
import AboutAuth from './AboutAuth';
import "./Auth.css"

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () =>{
    setIsSignup(!isSignup);
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
        <form>
          {
            isSignup && (
              <label htmlFor="name">
                 <h4>Display Name</h4>
            <input type="name" name='name' id='name' />
              </label>
            )
          }

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' />
          </label>
          <label htmlFor="password">
          <div style={{display: 'flex', justifyContent:'space-between'}} >
          <h4>Password</h4>
           { !isSignup && <p style={{color: "#007ac6", fontSize: '13px'}} >Forgot Password?</p>}
          </div>
            <input type="password" name='password' id='password' />
            {
              isSignup && <p style={{color: "#666767", fontSize: '13px'}}>Passwords must contain at least eight <br/> characters, including at least 1 letter and 1 <br/> number. </p>
            }
          </label>
          {
            isSignup && (
              <label htmlFor="check">
                <input type="checkbox" id="check" />
                <p style={{fontSize: '13px'}}>Opt-in to receive occasional <br/>product updates, user research invitations,<br/> company announcements, and digests.</p>
              </label>
            )
          }
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