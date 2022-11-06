import React from "react";
import "./Content.css";
import { Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Tickets from "./components/tickets/Tickets";
import Users from "./components/users/Users";
const Content = ({ adminstate }) => {
	console.log(adminstate);
	return (
		<div>
			<div className='content-div'>
				<h1>Content</h1>
				{adminstate.dashboard === true && <Dashboard />}
				{adminstate.tickets === true && <Tickets />}
				{adminstate.users === true && <Users />}
			</div>
		</div>
	);
};

export default Content;
