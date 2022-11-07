import React from "react";
import MaterialTable from "@material-table/core";
const UserTable = (props) => {
	const { usersData, setSelectedUserDetails } = props;
	return (
		<div>
			<h1>Users Data</h1>
			<MaterialTable
				data={usersData}
				columns={[
					{
						title: "Email",
						field: "email",
					},
					{
						title: "Name",
						field: "name",
					},
					{
						title: "User ID",
						field: "userId",
					},
					{
						title: "STATUS",
						field: "userStatus",
						lookup: {
							PENDING: "PENDING",
							APPROVED: "APPROVED",
							REJECTED: "REJECTED",
						},
					},
					{
						title: "USER TYPE",
						field: "userTypes",
						lookup: {
							ADMIN: "ADMIN",
							CUSTOMER: "CUSTOMER",
							ENGINEER: "ENGINEER",
						},
					},
				]}
				options={{
					filtering: true,
					sorting: true,
					search: true,
					headerStyle: {
						backgroundColor: "blue",
						color: "#fff",
					},
					rowStyle: {
						backgroundColor: "#eee",
					},
				}}
				title={"User Records"}
				onRowClick={(event, rowData) => {
					console.log(rowData);
					setSelectedUserDetails(...rowData);
				}}
			/>
		</div>
	);
};

export default UserTable;
