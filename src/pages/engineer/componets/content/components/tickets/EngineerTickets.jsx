import React, { useState, useEffect } from "react";
import "./Tickets.css";
import {
	fetchTickets,
	updateTicket,
} from "../../../../../../commom/apis/tickets";
import TicketsTable from "../../../../../../commom/components/tickets/ticketsTable/TicketsTable";
import TicketsModal from "../../../../../../commom/components/tickets/ticketsModal/TicketsModal";
import Loader from "../../../../../../commom/components/loader/Loader";
const EngineerTickets = () => {
	const [ticketsData, setTicketsData] = useState();
	const [selectedTicketDetails, setSelectedTicketDetails] = useState({});
	const [ticketModel, setTicketModel] = useState(false);
	const [ticketModelError, setTicketModelError] = useState("");
	const [loading, setLoading] = useState(true);
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
			updateTicket(data, selectedTicketDetails.id)
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
		<>
			{loading ? (
				<Loader />
			) : (
				<div>
					<h4 className='tickets-heading'>
						You can make changes in Tickets
					</h4>
					<TicketsTable
						ticketsData={ticketsData}
						setSelectedTicketDetails={setSelectedTicketDetails}
						showTicketModel={showTicketModel}
					/>
					<TicketsModal
						ticketModel={ticketModel}
						hideTicketModel={hideTicketModel}
						selectedTicketDetails={selectedTicketDetails}
						selectedTicketChange={selectedTicketChange}
						ticketUpdate={ticketUpdate}
						ticketModelError={ticketModelError}
						isUserTypeEngineer
					/>
				</div>
			)}
		</>
	);
};

export default EngineerTickets;
