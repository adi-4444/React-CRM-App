import React,{useState} from 'react'
import './Authentication.css'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';


const Authentication = () => {
   const [auth,setAuth] = useState(true)
  return (
    <div>

      <div>Authentication Comp</div>
      {/* {
        auth === "login" && <Login setAuth={setAuth}/> 
      }
      {
        auth === "signup" && <Signup setAuth={setAuth}/>
      } */}
      {auth ? <Login setAuth={setAuth}/> : <Signup setAuth={setAuth}/>}
    </div>
  )
}

export default Authentication;