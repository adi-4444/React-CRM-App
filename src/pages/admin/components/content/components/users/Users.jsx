import React, { useState, useEffect } from "react";
import "./Users.css";
import UserTable from "./userTable/UserTable";
import { fetchUsers } from "../../../../apis/users";
import UserModel from "./userModel/UserModel";
import { updateUser } from "../../../../apis/users";
const Users = () => {
	const [usersData, setUsersData] = useState([]);
	const [selectedUserDetails, setSelectedUserDetails] = useState({});
	const [userModel, setUserModel] = useState(false);
	const [userModelError, setUserModelError] = useState("");
	useEffect(() => {
		getUsers();
	}, []);
	const getUsers = () => {
		try {
			fetchUsers()
				.then((result) => {
					const { data, status } = result;
					if (status === 200) {
						setUsersData(data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.log(error);
		}
	};
	const hideUserModel = () => {
		setUserModel(false);
		setSelectedUserDetails({});
	};
	const showUserModel = () => {
		setUserModel(true);
	};
	const selectedUserChange = (e) => {
		const currentData = { ...selectedUserDetails };
		if (e.target.name === "name") {
			currentData.name = e.target.value;
		} else if (e.target.name === "email") {
			currentData.email = e.target.value;
		} else if (e.target.name === "userType") {
			currentData.userTypes = e.target.value;
		} else {
			currentData.userStatus = e.target.value;
		}
		setSelectedUserDetails(currentData);
	};
	const userUpdate = (e) => {
		e.preventDefault();
		const data = {
			userType: selectedUserDetails.userTypes,
			userStatus: selectedUserDetails.userStatus,
			userName: selectedUserDetails.name,
		};
		try {
			updateUser(data, selectedUserDetails.userId)
				.then((res) => {
					const { status } = res;
					if (status === 200) {
						hideUserModel();
						getUsers();
					}
				})
				.catch((err) => {
					console.log(err.message);
					setUserModelError(err.message);
				});
		} catch (err) {
			console.log(err.message);
			setUserModelError(err.message);
		}
	};
	return (
		<div>
			<h4 className='users-heading'>You can make changes for users</h4>
			<UserTable
				usersData={usersData}
				setSelectedUserDetails={setSelectedUserDetails}
				showUserModel={showUserModel}
			/>
			{userModel && (
				<UserModel
					userModel={userModel}
					hideUserModel={hideUserModel}
					selectedUserDetails={selectedUserDetails}
					selectedUserChange={selectedUserChange}
					userUpdate={userUpdate}
					userModelError={userModelError}
				/>
			)}
		</div>
	);
};

export default Users;
