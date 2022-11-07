import React, { useState, useEffect } from "react";
import "./Users.css";
import UserTable from "./UserTable";
import { fetchUsers } from "../../../../apis/users";

const Users = () => {
	const [usersData, setUsersData] = useState([]);
	const [selectedUserDetails, setSelectedUserDetails] = useState({});
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
	console.log(usersData);
	console.log(selectedUserDetails);
	return (
		<div>
			<h1>Users</h1>
			<UserTable
				usersData={usersData}
				setSelectedUserDetails={setSelectedUserDetails}
			/>
		</div>
	);
};

export default Users;
