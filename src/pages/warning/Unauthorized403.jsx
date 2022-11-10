import React from "react";
import img from "../../commom/assets/images/403.gif";
import { useNavigate } from "react-router-dom";
import "./403.css";

const Unauthorized403 = () => {
	const navigate = useNavigate();
	return (
		<div className='maindiv'>
			<h1>You Dont' have access to this page</h1>
			<img src={img} alt='Unauthorized Access' />
			<button onClick={() => navigate(-1)} className='button'>
				Go Back
			</button>
		</div>
	);
};

export default Unauthorized403;
