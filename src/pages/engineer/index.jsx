import React, { useEffect } from "react";
import EngineerSidebar from "./componets/sidebar/EngineerSidebar";
import Content from "./componets/content/Content";
import "./engineer.css";
import { USER_TYPES } from "../../commom/constants/userTypes";
import { useNavigate } from "react-router-dom";

const Engineer = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const user = localStorage.getItem("userType");
		if (user === USER_TYPES.ENGINEER) {
			navigate("/engineer/dashboard");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<div className='admin-page'>
				<EngineerSidebar />
				<Content />
			</div>
		</div>
	);
};

export default Engineer;
