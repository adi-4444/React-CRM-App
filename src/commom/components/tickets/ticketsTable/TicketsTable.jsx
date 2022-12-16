import React from "react";
import "./ticketstable.css";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

const TicketsTable = (props) => {
	const { ticketsData, setSelectedTicketDetails, showTicketModel } = props;
	const coloumn = [
		{ title: "ID", field: "id", align: "center" },
		{ title: "TITLE", field: "title", align: "center" },
		{ title: "DISCRIPTION", field: "description", align: "center" },
		{ title: "REPORTER", field: "reporter", align: "center" },
		{ title: "ASSIGNEE", field: "assignee", align: "center" },
		{ title: "PRIORITY", field: "ticketPriority", align: "center" },
		{
			title: "STATUS",
			field: "status",
			emptyValue: () => <em>null</em>,
			render: (rowData) => (
				<div
					className={`product-badge status-${rowData.status.toLowerCase()}`}
				>
					{rowData.status}
				</div>
			),
			lookup: {
				OPEN: "OPEN",
				IN_PROGRESS: "IN_PROGRESS",
				CLOSED: "CLOSED",
				BLOCKED: "BLOCKED",
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
			paddingLeft: "30px",
			textAlign: "center",
		},
		rowStyle: {
			backgroundColor: "#fff",
		},
		exportMenu: [
			{
				label: "Export PDF",
				exportFunc: (cols, datas) =>
					ExportPdf(cols, datas, "Tickets CRM"),
			},
			{
				label: "Export CSV",
				exportFunc: (cols, datas) =>
					ExportCsv(cols, datas, "Tickets CRM"),
			},
		],
	};
	return (
		<div>
			<div className='ticketstable-wrapper'>
				<MaterialTable
					data={ticketsData}
					columns={coloumn}
					options={options}
					title={"Tickets Records"}
					onRowClick={(event, rowData) => {
						showTicketModel(true);
						setSelectedTicketDetails(rowData);
					}}
				/>
			</div>
		</div>
	);
};

export default TicketsTable;
