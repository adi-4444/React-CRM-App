import React,{useState} from 'react'
import { useEffect } from 'react';
import './Authentication.css'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {useNavigate} from 'react-router-dom';
import {USER_TYPES} from '../../commom/constants/userTypes'


const Authentication = () => {



   const [auth,setAuth] = useState("login");
   const navigate = useNavigate()

   useEffect(()=> {
      const accessToken = localStorage.getItem("token");
      if(accessToken) {
          const userType = localStorage.getItem("userType");
          if(userType === USER_TYPES.ENGINEER) {
            navigate("/engineer");   
            // window.location.href = "/engineer";
        } else if(userType === USER_TYPES.CUSTOMER) {
            navigate("/customer");   
            // window.location.href = "/customer";
        } else {
          navigate("/admin");   
          // window.location.href = "/admin";
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


    </div>
  )
}

export default Authentication;