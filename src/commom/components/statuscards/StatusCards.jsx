import React from "react";
import "./statuscards.css";
import { GoPencil } from "react-icons/go";
import { GrInProgress } from "react-icons/gr";
import { MdOutlineCloudDone } from "react-icons/md";
import { ImBlocked } from "react-icons/im";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const StatusCards = (props) => {
	const { ticketsCount, totalTickets } = props;
	const statusData = [
		{
			statusName: "Open",
			count: ticketsCount.open,
			color: "#321fdb",
			pathColor: "white",
			icon: <GoPencil color='white' />,
		},
		{
			statusName: "Progress",
			count: ticketsCount.progress,
			color: "#f9b115",
			pathColor: "white",
			icon: <GrInProgress color='white' fill='true' />,
		},
		{
			statusName: "Closed",
			count: ticketsCount.closed,
			color: "#1bab6e",
			pathColor: "white",
			icon: <MdOutlineCloudDone color='white' />,
		},
		{
			statusName: "Blocked",
			count: ticketsCount.blocked,
			color: "#e55353",
			pathColor: "white",
			icon: <ImBlocked color='white' />,
		},
	];

	return (
		<div>
			<div className='cards d-flex justify-content-center flex-wrap'>
				{statusData.map((statusCard) => {
					const { count, statusName, icon, pathColor } = statusCard;
					const percentageValue = Math.floor(
						(count / totalTickets?.length) * 100
					);
					return (
						<div key={statusName}>
							<div
								className={`status-card-wrapper bg-${statusName.toLowerCase()} p-3 shadow-lg`}
							>
								<div className='status-card-heading d-flex'>
									<div className='icon'>{icon}</div>
									<div className='mx-2 mb-3 text-white'>
										{statusName}
									</div>
								</div>
								<div className='status-card-details d-flex w-100 justify-content-around align-items-center'>
									<div>
										<h3 className='text-white'>{count}</h3>
									</div>
									<div style={{ width: 50, height: 50 }}>
										<CircularProgressbar
											value={percentageValue}
											styles={buildStyles({
												pathColor: pathColor,
												trailColor: "#80808036",
											})}
										/>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default StatusCards;
