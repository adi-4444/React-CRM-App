import React, { useState, useEffect } from "react";
import "./Users.css";
import UserTable from "./userTable/UserTable";
import { fetchUsers } from "../../../../apis/users";
import UserModel from "./userModel/UserModel";

const Users = () => {
	const [usersData, setUsersData] = useState([]);
	const [selectedUserDetails, setSelectedUserDetails] = useState({});
	const [userModel, setUserModel] = useState(false);
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
	const hiseUserModel = () => {
		setUserModel(false);
	};
	const showUserModel = () => {
		setUserModel(true);
	};
	return (
		<div>
			<h4>You can make changes for users</h4>
			<UserTable
				usersData={usersData}
				setSelectedUserDetails={setSelectedUserDetails}
				showUserModel={showUserModel}
			/>
			<UserModel
				userModel={userModel}
				hiseUserModel={hiseUserModel}
				selectedUserDetails={selectedUserDetails}
			/>
		</div>
	);
};

export default Users;
