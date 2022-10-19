import React,{useEffect} from 'react'
import{useNavigate} from 'react-router-dom'

const Admin = () => {
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
      <h1>Welcome To Admin Component</h1>
      <button onClick={handleLogout}> Log out </button>
    </div>
  )
}

export default Admin;