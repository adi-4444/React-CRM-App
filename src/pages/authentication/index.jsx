import React,{useState} from 'react'
import { useEffect } from 'react';
import './Authentication.css'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {useNavigate} from 'react-router-dom';

const Authentication = () => {
   const [auth,setAuth] = useState("login");
   const navigate = useNavigate()

   useEffect(()=> {
      const accessToken = localStorage.getItem("token");
      if(accessToken) {
          const userType = localStorage.getItem("userType");
          if(userType === "ENGINEER") {
            navigate("/engineer");
        } else if(userType === "CUSTOMER") {
            navigate("/customer");
        } else {
          navigate("/admin");
        }
      }
   },[navigate])
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