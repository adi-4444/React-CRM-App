import React from 'react'
import './Signup.css'


const Signup = ({setAuth}) => {
  return (
    <div>
      <h1>Signup Comp</h1>
      <p>Already Have an account ? <a href='/' onClick={setAuth(true)}>Login</a></p>
    </div>
  )
}

export default Signup;