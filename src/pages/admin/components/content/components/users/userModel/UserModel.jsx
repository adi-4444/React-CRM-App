import React from "react";
import "./usermodel.css";
import {
	CModal,
	CModalBody,
	CModalHeader,
	CModalTitle,
	CModalFooter,
} from "@coreui/react";
import { CButton } from "@coreui/react";
const UserModel = (props) => {
	const { userModel, hiseUserModel, selectedUserDetails } = props;
	console.log(userModel);
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
					<CModalBody>React Modal body text goes here.</CModalBody>
					<CModalFooter>
						<CButton color='secondary' onClick={hiseUserModel}>
							Close
						</CButton>
						<CButton color='info'>Save changes</CButton>
					</CModalFooter>
				</CModal>
			</div>
		</div>
	);
};

export default UserModel;
