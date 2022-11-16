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

const TicketsModel = (props) => {
	const {
		ticketModel,
		hiseTicketModel,
		selectedTicketDetails,
		selectedTicketChange,
		ticketUpdate,
		ticketModelError,
	} = props;
	const { id, title, discription, reporter, assignee, priority, status } =
		selectedTicketDetails;
	return (
		<div>
			<div className='modal-wrapper'>
				<CModal
					alignment='center'
					onClose={hiseUserModel}
					visible={userModel}
					backdrop='static'
				>
					<CModalHeader>
						<CModalTitle>Update User</CModalTitle>
					</CModalHeader>
					<form onSubmit={userUpdate}>
						<CModalBody>
							<div className='form-container my-3 mx-2'>
								<label htmlFor='name' className='d-flex'>
									<span>Name: </span>
									<input
										type='text'
										id='name'
										name='name'
										className='form-control mx-2'
										value={name}
										onChange={selectedUserChange}
									/>
								</label>
							</div>
							<div className='form-container my-3 mx-2'>
								<label htmlFor='email' className='d-flex'>
									<span>Email: </span>
									<input
										type='text'
										id='email'
										name='email'
										className='form-control mx-2'
										value={email}
										onChange={selectedUserChange}
										disabled
									/>
								</label>
							</div>
							<div className='form-container my-3 mx-2'>
								<label htmlFor='userId' className='d-flex'>
									<span>UserId: </span>
									<input
										type='text'
										id='userId'
										name='userId'
										className='form-control mx-2'
										value={userId}
										onChange={selectedUserChange}
										disabled
									/>
								</label>
							</div>
							<div className='form-container my-3 mx-2'>
								<label htmlFor='userType' className='d-flex'>
									<span>UserType: </span>
									<select
										name='userType'
										id='userType'
										className='form-select mx-2'
										value={userTypes}
										onChange={selectedUserChange}
									>
										<option value={USER_TYPES.ADMIN}>
											{USER_TYPES.ADMIN}
										</option>
										<option value={USER_TYPES.ENGINEER}>
											{USER_TYPES.ENGINEER}
										</option>
										<option value={USER_TYPES.CUSTOMER}>
											{USER_TYPES.CUSTOMER}
										</option>
									</select>
								</label>
							</div>
							<div className='form-container my-3 mx-2'>
								<label htmlFor='userStatus' className='d-flex'>
									<span>Status: </span>
									<select
										className='form-select mx-2'
										name='userStatus'
										id='userStatus'
										value={userStatus}
										onChange={selectedUserChange}
									>
										<option value='PENDING'>PENDING</option>
										<option value='APPROVED'>
											APPROVED
										</option>
										<option value='REJECTED'>
											REJECTED
										</option>
									</select>
								</label>
							</div>
							{userModelError && (
								<div className='my-2 text-danger mx-2'>
									{userModelError}
								</div>
							)}
						</CModalBody>
						<CModalFooter>
							<CButton color='secondary' onClick={hiseUserModel}>
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

export default TicketsModel;
