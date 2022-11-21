import React, { useState, useEffect } from "react";
import { fetchTickets } from "../../../../../../commom/apis/tickets";
import StatusCards from "../../../../../../commom/components/statuscards/StatusCards";
import { calculateTickets } from "../../../../../../commom/utils/calculateTickets";
import { fetchUsers } from "../../../../apis/users";
import "./Dashboard.css";
import UserCards from "./userCards/UserCards";
import { userStatusCount } from "./userStatusCount";

const Dashboard = () => {
	const [ticketsData, setTicketsData] = useState();
	const [ticketsCount, setTicketsCount] = useState({
		open: 0,
		progress: 0,
		closed: 0,
		blocked: 0,
	});
	const [uesrsStatus, setUsersStatus] = useState({
		adminCount: { Approved: 0, Pending: 0, Rejected: 0 },
		customerCount: { Approved: 0, Pending: 0, Rejected: 0 },
		engineerCount: { Approved: 0, Pending: 0, Rejected: 0 },
	});
	const { adminCount, engineerCount, customerCount } = uesrsStatus;

	useEffect(() => {
		getTickets();
		getUsers();
	}, []);

	const getUsers = () => {
		try {
			fetchUsers()
				.then((result) => {
					const { data, status } = result;
					if (status === 200) {
						const userCount = userStatusCount(data);
						setUsersStatus(userCount);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.log(error);
		}
	};
	const getTickets = () => {
		try {
			fetchTickets()
				.then((result) => {
					const { data, status } = result;
					if (status === 200) {
						setTicketsData(data);
						const ticketsCount = calculateTickets(data);
						setTicketsCount(ticketsCount);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			<h1 className='dashboard-heading'>Dashboard</h1>
			<StatusCards
				ticketsCount={ticketsCount}
				totalTickets={ticketsData}
			/>
			<UserCards
				adminCount={adminCount}
				engineerCount={engineerCount}
				customerCount={customerCount}
			/>
		</div>
	);
};

export default Dashboard;
