import React, {useState} from 'react';
import { loginUser } from '../../apis/authApi';
import {useNavigate} from 'react-router-dom';
import {saveUserInfo} from '../../../../commom/utils/helper'
import './Login.css';
import Loader from '../../../../commom/components/loader/Loader'
import { USER_TYPES } from '../../../../commom/constants/userTypes';

const Login = ({setAuth}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault()
    const data = {userId,password}
    setLoading(true)
    try {
      loginUser(data)
      .then(res => {
        const {data, status} = res;
        if (status === 200) {
          const {userTypes} = data;
                 saveUserInfo(data)
                 setLoading(false);
           // if success, i will redirect the user to login page
           if(userTypes === USER_TYPES.CUSTOMER) {
             navigate("/customer");
          } else if(userTypes === USER_TYPES.ENGINEER) {
            navigate("/engineer");
           } else if(userTypes === USER_TYPES.ADMIN) {
            navigate("/admin");
           } else {
            navigate("/")
           }
        }
      })
        .catch(err => {
          // if failure, i will show an error
          const errMsg = err?.response?.data?.message || err?.message;
          console.log(errMsg);
          setLoading(false);
        })
      } catch (err) {
        // if failure, i will show an error
        const errMsg = err?.response?.data?.message || err?.message;
        console.log(errMsg);
        setLoading(false);
      }
  };

  return (
    <>
    { loading ? <Loader /> : (
    <div className='login-body'>
        <h1>Welcome</h1>
      <div className="login-wrapper">
 
        <div className="login-form-group">
          <h2>Login</h2>
        <form onSubmit={loginHandler}>
          <div className="form-group">
            <input type="userid" className='form-control' name='userid *' placeholder="userid" autoFocus required
            value={userId} onChange={(e)=> setUserId(e.target.value)}
            />
            <label className='form-label'>User ID *</label>
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
    )}
    </>
  )
}

export default Login;