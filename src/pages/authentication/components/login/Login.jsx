import React from 'react'
import './Login.css'


const Login = ({setAuth}) => {
  return (
    <div>
      <h1>Login Comp</h1>
      <p>Don't have an account ? <a href='/' onClick={setAuth(false)}>Signup</a> </p>
    </div>
  )
}

export default Login;