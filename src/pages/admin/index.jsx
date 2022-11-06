import React, { useState } from "react";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";
import "./admin.css";

const Admin = () => {
	const [adminstate, setAdminState] = useState({
		dashboard: true,
		tickets: false,
		users: false,
	});
	return (
		<div>
			<div className='admin-page'>
				<Sidebar setAdminState={setAdminState} />
				<Content adminstate={adminstate} />
			</div>
		</div>
	);
};

export default Admin;
