import react from 'react';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './App.css';

function App() {

  const [registrationFormStatus, setRegistrationFormStatus] = useState(false)
  const loginProps = useSpring({
    left: registrationFormStatus ? -430 : 0,
    opacity: registrationFormStatus ? 0 : 1
  })
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 430,
    opacity: registrationFormStatus ? 1 : 0
  })
  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus ? "solid 0px transparent" : "solid 2px #0fffe3",
    fontWeight: registrationFormStatus ? "100" : "700",
    fontSize: registrationFormStatus ? "medium" : "x-large"
  })
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus ? "solid 2px #0fffe3" : "solid 0px transparent",
    fontSize: registrationFormStatus ? "x-large" : "medium"
  })

  const registerClicked = () => {

    setRegistrationFormStatus(true)
  }

  const loginClicked = () => {

    setRegistrationFormStatus(false)
  }



  return (
    <div className="login-register-wrapper">
      <div className="Nav-buttons">
        <animated.button onClick={loginClicked} id="loginBtn" style={loginBtnProps}>Log in</animated.button>
        <animated.button onClick={registerClicked} id="registerBtn" style={registerBtnProps}>Sign Up</animated.button>
      </div>


      <div className="form-group">
        <animated.form action='' id='loginform' style={loginProps}><LoginForm /></animated.form>
        <animated.form action='' id='registerform' style={registerProps}><RegisterForm /></animated.form>
      </div>

      <div className="forgot-panel">
        <a href='#'> Forgot Your Passoword?</a>
      </div>

    </div>
  );
}

const LoginForm = () => {
  return (
    <react.Fragment>
      <label className='label' for='username'>USERNAME</label>
      <input type='text' id='username' placeholder='i.e Jack123' />
      <label for='password'>PASSWORD</label>
      <input type='text' id='password' />
      <input type="submit" value='submit' className='submit' />
    </react.Fragment>
  )
}

const RegisterForm = () => {
  return (
    <react.Fragment>
      <label for='fullname'>Full Name</label>
      <input type="text" id="fullname" />
      <label for='email'>Email</label>
      <input type="text" id="email" />
      <label for='password'>Password</label>
      <input type="text" id="password" />
      <label for='confirmpassword'>Confirm passowrd</label>
      <input type="text" id="confirmpassword" />
      <input type="submit" value="submit" className='submit' />
    </react.Fragment>
  )
}

export default App;
