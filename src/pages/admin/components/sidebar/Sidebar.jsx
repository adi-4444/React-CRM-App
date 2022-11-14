import React from "react";
import "./Sidebar.css";
import { useNavigate, NavLink } from "react-router-dom";

const Sidebar = ({ setAdminState }) => {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.clear();
		navigate("/");
	};
	// const setAdminStateToDashboard = () => {
	// 	setAdminState({ dashboard: true, tickets: false, users: false });
	// };
	// const setAdminStateToTickets = () => {
	// 	setAdminState({ dashboard: false, tickets: true, users: false });
	// };
	// const setAdminStateToUsers = () => {
	// 	setAdminState({ dashboard: false, tickets: false, users: true });
	// };
	return (
		<div>
			<div className='sidebar-container'>
				<div className='sidebar-heading'>
					<h2>CRM APP</h2>
				</div>
				<div className='sidebar-content'>
					<p>
						<NavLink to='/admin/dashboard'>Dashboard</NavLink>
					</p>
					<p>
						<NavLink to='/admin/tickets'>Tickets</NavLink>
					</p>
					<p>
						<NavLink to='/admin/users'>Users</NavLink>
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
