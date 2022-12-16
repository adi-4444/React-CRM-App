import React, { useState, useEffect } from "react";
import {
	createNewTicket,
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
import Loader from "../../../../../../commom/components/loader/Loader";

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
	const [loading, setLoading] = useState(true);
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
						setLoading(false);
					}
				})
				.catch((err) => {
					const errMsg = err?.response?.data?.message || err?.message;
					console.log(errMsg);
					setLoading(false);
				});
		} catch (err) {
			const errMsg = err?.response?.data?.message || err?.message;
			console.log(errMsg);
			setLoading(false);
		}
	};

	const createTicket = (e) => {
		e.preventDefault();
		const data = {
			title: e.target.title.value,
			description: e.target.description.value,
		};
		try {
			createNewTicket(data)
				.then((res) => {
					const { status } = res;
					if (status === 201) {
						getTickets();
						hideTicketModel();
					}
				})
				.catch((err) => {
					setTicketModelError(err);
					console.log(err);
				});
		} catch (err) {
			setTicketModelError(err);
			console.log(err);
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
						createTicket={createTicket}
					/>
				</div>
			)}
		</>
	);
};

export default CustomerDashboard;

export const CreateNewTicket = (props) => {
	const { ticketModel, hideTicketModel, ticketModelError, createTicket } =
		props;

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
					<form onSubmit={createTicket}>
						<CModalBody>
							<div className='form-container my-3 mx-2'>
								<label htmlFor='title' className='d-flex'>
									<span>Title: </span>
									<input
										type='text'
										name='title'
										className='form-control mx-2'
										required
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
										required
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
								Create New Ticket
							</CButton>
						</CModalFooter>
					</form>
				</CModal>
			</>
		</div>
	);
};
