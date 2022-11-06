import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setAdminState }) => {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.clear();
		navigate("/");
	};
	const setAdminStateToDashboard = () => {
		setAdminState({ dashboard: true, tickets: false, users: false });
	};
	const setAdminStateToTickets = () => {
		setAdminState({ dashboard: false, tickets: true, users: false });
	};
	const setAdminStateToUsers = () => {
		setAdminState({ dashboard: false, tickets: false, users: true });
	};
	return (
		<div>
			<div className='sidebar-container'>
				<div className='sidebar-heading'>
					<h2>CRM APP</h2>
				</div>
				<div className='sidebar-content'>
					<p>
						<a href='#/' onClick={setAdminStateToDashboard}>
							Dashboard
						</a>
					</p>
					<p>
						<a href='#/' onClick={setAdminStateToTickets}>
							Tickets
						</a>
					</p>
					<p>
						<a href='#/' onClick={setAdminStateToUsers}>
							Users
						</a>
					</p>
					<p>
						<a href='#/' onClick={logout}>
							Log Out
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
