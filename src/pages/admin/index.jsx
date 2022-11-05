import React from "react";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";
// import Logout from '../../commom/components/logout/Logout';
import "./admin.css";

const Admin = () => {
	return (
		<div>
			<div className='admin-page'>
				{/* <div className='sidebar-div'>
				</div> */}
				<Sidebar />
				<Content />
				{/* <div className='content-div'>
				</div> */}
			</div>
		</div>
	);
};

export default Admin;
