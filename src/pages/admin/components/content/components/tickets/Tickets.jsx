import React, { useState, useEffect } from "react";
import "./Tickets.css";
import { fetchTickets } from "../../../../../../commom/apis/tickets";
import TicketsTable from "../../../../../../commom/components/tickets/ticketsTable/TicketsTable";

const Tickets = () => {
	const [ticketsData, setTicketsData] = useState();
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
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (err) {
			console.log(err);
		}
	};
	console.log(ticketsData);
	return (
		<div>
			<h4>You can make changes in Tickets</h4>
			<TicketsTable ticketsData={ticketsData} />
		</div>
	);
};

export default Tickets;
