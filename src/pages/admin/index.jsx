import React, { useEffect } from "react";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";
import "./admin.css";
import { USER_TYPES } from "../../commom/constants/userTypes";
import { useNavigate } from "react-router-dom";

const Admin = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const user = localStorage.getItem("userType");
		if (user === USER_TYPES.ADMIN) {
			navigate("/admin/dashboard");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<div className='admin-page'>
				<Sidebar />
				<Content />
			</div>
		</div>
	);
};

export default Admin;
