import React from "react";
import "./usercards.css";
import { MdAdminPanelSettings, MdEngineering } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const UserCards = ({ adminCount, engineerCount, customerCount }) => {
	return (
		<>
			<div className='cards d-flex align-items-center justify-content-center flex-wrap'>
				<div className='card shadow-lg'>
					<div className='card-heading admin'>
						<div className='text-white'>Admin's</div>
						<MdAdminPanelSettings size='2rem' color='white' />
					</div>
					<div className='card-status'>
						<div className='status approved'>
							Approved : {adminCount.Approved}
						</div>
						<div className='status pending'>
							Pending : {adminCount.Pending}
						</div>
						<div className='status rejected'>
							Rejected : {adminCount.Rejected}
						</div>
					</div>
				</div>
				<div className='card shadow-lg'>
					<div className='card-heading engineer'>
						<div className='text-white'>Engineer's</div>
						<MdEngineering size='2rem' color='white' />
					</div>
					<div className='card-status'>
						<div className='status approved'>
							Approved : {engineerCount.Approved}
						</div>
						<div className='status pending'>
							Pending : {engineerCount.Pending}
						</div>
						<div className='status rejected'>
							Rejected : {engineerCount.Rejected}
						</div>
					</div>
				</div>
				<div className='card shadow-lg'>
					<div className='card-heading customer'>
						<div className='text-white'>Customer's</div>
						<FaUsers size='2rem' color='white' />
					</div>
					<div className='card-status'>
						<div className='status approved'>
							Approved : {customerCount.Approved}
						</div>
						<div className='status pending'>
							Pending : {customerCount.Pending}
						</div>
						<div className='status rejected'>
							Rejected : {customerCount.Rejected}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserCards;
