import React from "react";
import "./ticketsmodel.css";
import {
	CModal,
	CModalBody,
	CModalHeader,
	CModalTitle,
	CModalFooter,
	CButton,
} from "@coreui/react";
import { TICKET_STATUS } from "../../../constants/ticketStatus";

const TicketsModal = (props) => {
	const {
		ticketModel,
		hideTicketModel,
		selectedTicketDetails,
		selectedTicketChange,
		ticketUpdate,
		ticketModelError,
		isUserTypeAdmin = false,
		isUserTypeEngineer = false,
		isUserTypeCustomer = false,
	} = props;
	const {
		id = "",
		title = "",
		status = "",
		ticketPriority = "",
		assignee = "",
		description = "",
	} = selectedTicketDetails;
	return (
		<div>
			<div className='modal-wrapper'>
				<CModal
					alignment='center'
					onClose={hideTicketModel}
					visible={ticketModel}
					backdrop='static'
				>
					<CModalHeader>
						<CModalTitle>Update Ticket</CModalTitle>
					</CModalHeader>
					<form onSubmit={ticketUpdate}>
						<CModalBody>
							<p className='m-2'>TicketId : {id}</p>
							<div className='form-container my-3 mx-2'>
								<label htmlFor='title' className='d-flex'>
									<span>Title: </span>
									<input
										type='text'
										id='title'
										name='title'
										className='form-control mx-2'
										value={title}
										onChange={selectedTicketChange}
										disabled={!isUserTypeCustomer}
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
										value={description}
										onChange={selectedTicketChange}
									/>
								</label>
							</div>
							<div className='form-container my-3 mx-2'>
								<label
									htmlFor='ticketPriority'
									className='d-flex'
								>
									<span>Ticket priority: </span>
									<input
										type='text'
										id='ticketPriority'
										name='ticketPriority'
										className='form-control mx-2'
										value={ticketPriority}
										onChange={selectedTicketChange}
									/>
								</label>
							</div>
							{!isUserTypeEngineer && (
								<div className='form-container my-3 mx-2'>
									<label
										htmlFor='assignee'
										className='d-flex'
									>
										<span>Assignee: </span>
										<input
											type='text'
											id='assignee'
											name='assignee'
											className='form-control mx-2'
											value={assignee}
											onChange={selectedTicketChange}
											disabled={!isUserTypeAdmin}
										/>
									</label>
								</div>
							)}

							<div className='form-container my-3 mx-2'>
								<label htmlFor='status' className='d-flex'>
									<span>Ticket Status:</span>
									<select
										name='status'
										id='status'
										className='form-select mx-2'
										value={status}
										onChange={selectedTicketChange}
									>
										<option value={TICKET_STATUS.OPEN}>
											{TICKET_STATUS.OPEN}
										</option>
										<option
											value={TICKET_STATUS.IN_PROGRESS}
										>
											{TICKET_STATUS.IN_PROGRESS}
										</option>
										<option value={TICKET_STATUS.BLOCKED}>
											{TICKET_STATUS.BLOCKED}
										</option>
										<option value={TICKET_STATUS.CLOSED}>
											{TICKET_STATUS.CLOSED}
										</option>
									</select>
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
			</div>
		</div>
	);
};

export default TicketsModal;
