import React, {useState} from 'react'
import './Login.css'


const Login = ({setAuth}) => {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault()
    console.log({userid,password})
  }

  return (
    <div className='login-body'>
        <h1>Welcome</h1>
      <div className="login-wrapper">
 
        <div className="login-form-group">
          <h2>Login</h2>
        <form onSubmit={loginHandler}>
          <div className="form-group">
            <input type="userid" className='form-control' name='userid *' placeholder="userid" autoFocus required
            value={userid} onChange={(e)=> setUserId(e.target.value)}
            />
            <label className='form-label'>Email *</label>
          </div>

          <div className="form-group">
            <input type="password" className='form-control' name='password' placeholder="Password" required
            value={password} onChange={(e)=> setPassword(e.target.value)}
            />
            <label className='form-label'>Password *</label>
          </div>
  
          <div  className="login-btn">
            <input type='submit' value='Login'/>
            <p> Don't have an account ? <a href='#/' onClick={() => setAuth("register")}>Signup</a></p> 
          </div>
        </form>
        </div>

      </div>
    </div>
  )
}

export default Login;