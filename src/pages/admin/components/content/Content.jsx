import React from "react";
import { Outlet } from "react-router-dom";

import "./Content.css";
const Content = () => {
	const userName = localStorage.getItem("name") || "";

	return (
		<div className='main-wrapper'>
			<h2>Hi , {userName}</h2>
			<div className='content-div'>
				<Outlet />
			</div>
		</div>
	);
};

export default Content;
