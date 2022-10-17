import React,{useState} from 'react'
import './Authentication.css'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';


const Authentication = () => {
   const [auth,setAuth] = useState("login")
  return (
    <div>
      {
        auth === "login" && <Login setAuth={setAuth}/>
      }
      {
        auth !== "login" && <Signup setAuth={setAuth}/>
      }
      {/* {auth ? <Login setAuth={setAuth}/> : <Signup setAuth={setAuth}/>} */}
    </div>
  )
}

export default Authentication;