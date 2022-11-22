import React, { useState, useEffect } from "react";
import { fetchTickets } from "../../../../../../commom/apis/tickets";
import Loader from "../../../../../../commom/components/loader/Loader";
import StatusCards from "../../../../../../commom/components/statuscards/StatusCards";
import { calculateTickets } from "../../../../../../commom/utils/calculateTickets";

import "./Dashboard.css";

const EngineerDashboard = () => {
	const [ticketsData, setTicketsData] = useState();
	const [loading, setLoading] = useState(true);
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
						setLoading(false);
					}
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div>
					<h1 className='dashboard-heading'>Dashboard</h1>
					<StatusCards
						ticketsCount={ticketsCount}
						totalTickets={ticketsData}
					/>
					<div className='mt-5'>
						<h2 className='mt-3'>
							These Tickets contains tickets details assigned only
							to you.
						</h2>
						<h3 className='mt-5'>
							You can Change the user Tickets details by clicking
							on Tickets on Side Nav
						</h3>
					</div>
				</div>
			)}
		</>
	);
};

export default EngineerDashboard;
