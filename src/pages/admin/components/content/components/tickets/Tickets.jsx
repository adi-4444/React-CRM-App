import React, { useState, useEffect } from "react";
import "./Tickets.css";
import {
	fetchTickets,
	updateTicket,
} from "../../../../../../commom/apis/tickets";
import TicketsTable from "../../../../../../commom/components/tickets/ticketsTable/TicketsTable";
import TicketsModel from "../../../../../../commom/components/tickets/ticketsModel/TicketsModel";

const Tickets = () => {
	const [ticketsData, setTicketsData] = useState();
	const [selectedTicketDetails, setSelectedTicketDetails] = useState({});
	const [ticketModel, setTicketModel] = useState(false);
	const [ticketModelError, setTicketModelError] = useState("");
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
	const hideTicketModel = () => {
		setTicketModel(false);
		setSelectedTicketDetails({});
	};
	const showTicketModel = () => {
		setTicketModel(true);
		setSelectedTicketDetails({});
		setTicketModelError("");
	};

	const selectedTicketChange = (e) => {
		const currentData = { ...selectedTicketDetails };
		if (e.target.name === "title") {
			currentData.title = e.target.value;
		} else if (e.target.name === "description") {
			currentData.description = e.target.value;
		} else if (e.target.name === "assignee") {
			currentData.assignee = e.target.value;
		} else if (e.target.name === "ticketPriority") {
			currentData.ticketPriority = e.target.value;
		} else {
			currentData.status = e.target.value;
		}
		setSelectedTicketDetails(currentData);
	};
	const ticketUpdate = (e) => {
		e.preventDefault();
		const data = {
			title: selectedTicketDetails.title,
			description: selectedTicketDetails.description,
			ticketPriority: selectedTicketDetails.ticketPriority,
			status: selectedTicketDetails.status,
			assignee: selectedTicketDetails.assignee,
		};

		try {
			updateTicket(data, selectedTicketChange.id)
				.then((res) => {
					const { status } = res;
					if (status === 200) {
						hideTicketModel();
						getTickets();
					}
				})
				.catch((err) => {
					console.log(err.message);
					setTicketModelError(
						err?.response?.data?.message || err.message
					);
				});
		} catch (err) {
			console.log(err.message);
			setTicketModelError(err?.response?.data?.message || err.message);
		}
	};
	return (
		<div>
			<h4 className='tickets-heading'>You can make changes in Tickets</h4>
			<TicketsTable
				ticketsData={ticketsData}
				setSelectedTicketDetails={setSelectedTicketDetails}
				showTicketModel={showTicketModel}
			/>
			<TicketsModel
				ticketModel={ticketModel}
				hideTicketModel={hideTicketModel}
				setSelectedTicketDetails={setSelectedTicketDetails}
				selectedTicketDetails={selectedTicketDetails}
				selectedTicketChange={selectedTicketChange}
				ticketUpdate={ticketUpdate}
				ticketModelError={ticketModelError}
			/>
		</div>
	);
};

export default Tickets;
