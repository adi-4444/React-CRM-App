import React from 'react'
import './404.css'
import img from '../../commom/assets/images/404.gif'
import { useNavigate } from 'react-router-dom'


const Notfound404 = () => {
   const navigate = useNavigate()
  return (
    <div className='maindiv'>
      <img src={img} alt='Not Found'/>
      <button onClick={() => navigate(-1)} className='button'>Go Back</button>
    </div>
  )
}

export default Notfound404;