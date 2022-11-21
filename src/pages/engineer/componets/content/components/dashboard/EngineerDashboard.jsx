import React, { useState, useEffect } from "react";
import { fetchTickets } from "../../../../../../commom/apis/tickets";
import StatusCards from "../../../../../../commom/components/statuscards/StatusCards";
import { calculateTickets } from "../../../../../../commom/utils/calculateTickets";

import "./Dashboard.css";

const EngineerDashboard = () => {
	const [ticketsData, setTicketsData] = useState();
	const [ticketsCount, setTicketsCount] = useState({
		open: 0,
		progress: 0,
		closed: 0,
		blocked: 0,
	});

	useEffect(() => {
		getTickets();
	}, []);

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
		</div>
	);
};

export default EngineerDashboard;
