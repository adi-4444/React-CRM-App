import React,{ useState } from 'react'
import './Signup.css'
import {resisterUser} from '../../apis/authApi'

const Signup = ({setAuth}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [userType, SetUserType] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const signupHandler = (e) => {
    e.preventDefault()
    const data = {name,email,userId,userType,password}
    console.log(data)

    // api call to Signup a new user
    try {
      resisterUser(data)
      .then(res => {
        console.log(res)
        const {status,data} = res;
        if(status === 201) {
          const {name,email,userId,userType} = data;
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("userId", userId);
          localStorage.setItem("userType", userType);
          // if success, i will redirect the user to login page
          setAuth("login")
        }
      })
      .catch(err => {
        const errMsg = err?.response?.data?.message || err?.message;
        console.log(errMsg)
      })
    } catch (err) {
      const errMsg = err?.response?.data?.message || err?.message;
      console.log(errMsg)
    }
    


    // if failure, i will show an error


  }

  return (
    <div className='signup-body'>
      <div className="signup-wrapper">

        <div className="signup-form-group">
          <h2>Signup</h2>

          <form onSubmit={signupHandler}>

            <div className="form-group">
              <input type="text" className='form-control' name='name' placeholder="Name" autoFocus required
              value={name} onChange={(e)=> setName(e.target.value)}/>
              <label className='form-label'>Name *</label>
            </div>

            <div className="form-group">
              <input type="text" className='form-control' name='email *' placeholder="Email" required
              value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <label className='form-label'>Email *</label>
            </div>

            <div className="form-group">
              <input type="text" className='form-control' name='userId *' placeholder="userId" required
              value={userId} onChange={(e)=> setUserId(e.target.value)}/>
              <label className='form-label'>User ID *</label>
            </div>

            <div className='user-type'>
              <label>Select User Type *  </label>
                <select value={userType} onChange={(e) => SetUserType(e.target.value)} required>
                    <option value='ENGINEER'>Engineer</option>
                    <option value='CUSTOMER'>Customer</option>
                </select>
            </div>

            <div className="form-group">
              <input type="password" className='form-control' name='password' placeholder="Password" required
              value={password} onChange={(e)=> setPassword(e.target.value)}/>
              <label className='form-label'>Password *</label>
            </div>

            <div className="form-group">
             <input type="password" className='form-control' name='confirmpassword' placeholder="ConfirmPassword" required
             value={confirmpassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
              <label className='form-label'>Confirm Password *</label>
              {
                password && confirmpassword ? 
                password === confirmpassword ? 
                <p style={{color:"#1bab6e", fontSize:"12px", margin:"-7.5px 0px" , padding:"0px",marginTop:"-15px"}}>* Password Matched</p> 
                : <p style={{color:"red", fontSize:"12px", margin:"-7.5px 0px", padding:"0px",marginTop:"-15px"}}>* Password Not Matched</p> 
                : ("")
              }
            </div>

            <div  className="signup-btn">
              <input type='submit' value='Signup' className='submit-btn'/>
              <p>Already have an account ? <a href='#/' onClick={() => setAuth("login")}>Login</a></p>
            </div>

          </form>

        </div>

      </div>
    </div>
  )
}

export default Signup;