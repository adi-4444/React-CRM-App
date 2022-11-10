import React from "react";
import { Outlet } from "react-router-dom";
import "./Content.css";
const Content = () => {
	return (
		<div>
			<div className='content-div'>
				<Outlet />
			</div>
		</div>
	);
};

export default Content;
