import React from "react";
import "./usertable.css";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

const UserTable = (props) => {
	const { usersData, setSelectedUserDetails, showUserModel } = props;

	const columns = [
		{
			title: "Email",
			field: "email",
		},
		{ title: "Name", field: "name", align: "center" },
		{ title: "User ID", field: "userId", align: "center" },
		{
			title: "STATUS",
			field: "userStatus",
			emptyValue: () => <em>null</em>,
			render: (rowData) => (
				<div
					className={`product-badge status-${rowData.userStatus.toLowerCase()}`}
				>
					{rowData.userStatus}
				</div>
			),
			lookup: {
				PENDING: "PENDING",
				APPROVED: "APPROVED",
				REJECTED: "REJECTED",
			},
		},
		{
			title: "USER TYPE",
			field: "userTypes",
			align: "center",
			lookup: {
				ADMIN: "ADMIN",
				CUSTOMER: "CUSTOMER",
				ENGINEER: "ENGINEER",
			},
		},
	];
	const options = {
		filtering: true,
		sorting: true,
		search: true,
		paging: true,
		pageSizeOptions: [5, 10, 20],
		paginationSize: 3,
		paginationType: "stepped",
		headerStyle: {
			backgroundColor: "#c8e6c9",
			color: "#256029",
			align: "center",
			paddingLeft: "40px",
			textAlign: "center",
		},
		rowStyle: {
			backgroundColor: "#fff",
		},
		exportMenu: [
			{
				label: "Export PDF",
				exportFunc: (cols, datas) =>
					ExportPdf(cols, datas, "User Data CRM"),
			},
			{
				label: "Export CSV",
				exportFunc: (cols, datas) =>
					ExportCsv(cols, datas, "User Data CRM"),
			},
		],
	};

	return (
		<div>
			<div className='matrialTable-wrapper shadow-lg'>
				<MaterialTable
					data={usersData}
					columns={columns}
					options={options}
					title={"User Records"}
					onRowClick={(event, rowData) => {
						setSelectedUserDetails({ ...rowData });
						showUserModel();
					}}
				/>
			</div>
		</div>
	);
};

export default UserTable;
