import React,{useEffect} from 'react'
import{useNavigate} from 'react-router-dom'

const Customer = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  }
  useEffect(()=> {
    const accessToken = localStorage.getItem("token");
    if(!accessToken) {
        navigate("/");
    }
 },[navigate])
  return (
    <div>
      <h1>Welcome to Customer component.</h1>
      <button onClick={handleLogout}> Log out </button>
   </div>
  )
}

export default Customer;