import React, { useState } from 'react';
import { useSpring, animated } from "react-spring"

import './App.css';

function App() {

  return (
    <div className="login-register-wrapper">
      <div className="Nav-buttons">
        <button id="loginBtn" className='active'>Log in</button>
        <button id="registerBtn" >Register</button>
      </div>
      <div className="form-group">
        <LoginForm />
        <RegisterForm />
      </div>
      <div className="forgot-panel"> forgot passowrd?</div>

    </div>
  )
}

const LoginForm = () => {
  return (
    <form action='' id='loginform'>
      <label for='username'>USERNAME</label>
      <input type='text' id='username' />
      <label for='password'>PASSWORD</label>
      <input type='text' id='password' />
      <input type="submit" value='submit' className='submit' />
    </form>
  )
}

const RegisterForm = () => {
  return (
    <form action='' id='registerform'>
      <label for='fullname'>Full Name</label>
      <input type="text" id="fullname" />
      <label for='email'>Email</label>
      <input type="text" id="email" />
      <label for='password'>Password</label>
      <input type="text" id="password" />
      <label for='confirmpassword'>Confirm passowrd</label>
      <input type="text" id="confirmpassword" />
      <input type="submit" value="submit" className='submit' />
    </form>
  )
}

export default App;
