import React, { useState, useEffect } from "react";
import {
	createTicket,
	fetchTickets,
} from "../../../../../../commom/apis/tickets";
import StatusCards from "../../../../../../commom/components/statuscards/StatusCards";
import { calculateTickets } from "../../../../../../commom/utils/calculateTickets";
import "./Dashboard.css";
import {
	CModal,
	CModalBody,
	CModalHeader,
	CModalTitle,
	CModalFooter,
	CButton,
} from "@coreui/react";

const CustomerDashboard = () => {
	const [ticketsData, setTicketsData] = useState();
	const [ticketsCount, setTicketsCount] = useState({
		open: 0,
		progress: 0,
		closed: 0,
		blocked: 0,
	});
	const [ticketModel, setTicketModel] = useState(false);
	const [ticketModelError, setTicketModelError] = useState("");
	const [ticketData, setTicketData] = useState({});
	useEffect(() => {
		getTickets();
	}, []);

	const hideTicketModel = () => {
		setTicketModel(false);
	};
	const showTicketModel = () => {
		setTicketModel(true);
		setTicketModelError("");
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
	const newTicketChange = (e) => {
		const data = {
			title: e.target.value,
			description: e.target.value,
		};
		setTicketData(data);
	};

	const createNewTicket = (e) => {
		e.preventDefault();
		const data = {
			title: ticketData.title,
			description: ticketData.description,
		};
		try {
			createTicket(data)
				.then((res) => {
					const { status } = res;
					if (status === 200) {
						console.log(res);
						setTicketModel(false);
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
			<h1 className='dashboard-heading'>Dashboard</h1>
			<StatusCards
				ticketsCount={ticketsCount}
				totalTickets={ticketsData}
			/>

			<CButton
				className='newbtn'
				color='danger'
				variant='outline'
				onClick={showTicketModel}
			>
				To Create a ticket | Click Here
			</CButton>
			<CreateNewTicket
				ticketModel={ticketModel}
				hideTicketModel={hideTicketModel}
				ticketModelError={ticketModelError}
				newTicketChange={newTicketChange}
				createNewTicket={createNewTicket}
			/>
		</div>
	);
};

export default CustomerDashboard;

export const CreateNewTicket = (props) => {
	const {
		ticketModel,
		hideTicketModel,
		ticketModelError,
		newTicketChange,
		createNewTicket,
	} = props;

	return (
		<div>
			<>
				<CModal
					alignment='center'
					onClose={hideTicketModel}
					visible={ticketModel}
					backdrop='static'
				>
					<CModalHeader>
						<CModalTitle>Create a New Ticket</CModalTitle>
					</CModalHeader>
					<form onSubmit={createNewTicket}>
						<CModalBody>
							<div className='form-container my-3 mx-2'>
								<label htmlFor='title' className='d-flex'>
									<span>Title: </span>
									<input
										type='text'
										id='title'
										name='title'
										className='form-control mx-2'
										onChange={newTicketChange}
									/>
								</label>
							</div>
							<div className='form-container my-3 mx-2'>
								<label htmlFor='description' className='d-flex'>
									<span>Desciption: </span>
									<textarea
										id='description'
										name='description'
										className='form-control mx-2'
										onChange={newTicketChange}
									/>
								</label>
							</div>
							{ticketModelError && (
								<div className='my-2 text-danger mx-2'>
									{ticketModelError}
								</div>
							)}
						</CModalBody>
						<CModalFooter>
							<CButton
								color='secondary'
								onClick={hideTicketModel}
							>
								Close
							</CButton>
							<CButton type='submit' color='info'>
								Save changes
							</CButton>
						</CModalFooter>
					</form>
				</CModal>
			</>
		</div>
	);
};
