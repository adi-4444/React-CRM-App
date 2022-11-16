import React from "react";
import "./Sidebar.css";
import { useNavigate, NavLink } from "react-router-dom";
import {
	CSidebar,
	CSidebarNav,
	CNavTitle,
	CNavItem,
	CSidebarBrand,
} from "@coreui/react";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { ImTicket } from "react-icons/im";
import { GrCloudlinux } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
const Sidebar = () => {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.clear();
		navigate("/");
	};

	return (
		<div>
			{/* <div className='sidebar-container'>
				<div className='sidebar-heading'>
					<h2>CRM APP</h2>
				</div>
				<div className='sidebar-content'>
					<p>
						Dashboard</NavLink>
					</p>
					<p>
						<NavLink to='/admin/tickets'>Tickets</NavLink>
					</p>
					<p>
						<NavLink to='/admin/users'>Users</NavLink>
					</p>
					<p>
						<a href='#/' onClick={logout}>
							Log Out
						</a>
					</p>
				</div>
			</div> */}
			<CSidebar unfoldable className='vh-100 sidebar-wrapper'>
				<CSidebarNav>
					<CSidebarBrand>
						<div className='d-flex align-items-center flex-md-column'>
							<GrCloudlinux className='iconsize m-2 ms-2.5' />
							<span>
								<h4 className='mx-3 my-1 mb-3'>CRM</h4>
							</span>
						</div>
					</CSidebarBrand>
					<CNavTitle>All Problems Solution</CNavTitle>
					<CNavItem href='#'>
						<NavLink to='/admin/dashboard'>
							<i>
								<MdDashboard className='text-white iconsize' />
							</i>
							<span className='item-text mx-4'>Dashboard</span>
						</NavLink>
					</CNavItem>
					<CNavItem href='#'>
						<NavLink to='/admin/tickets'>
							<i>
								<ImTicket className='text-white iconsize' />
							</i>
							<span className='item-text mx-4'>Tickets</span>
						</NavLink>
					</CNavItem>
					<CNavItem href='#'>
						<NavLink to='/admin/users'>
							<i>
								<HiUsers className='text-white iconsize' />
							</i>
							<span className='item-text mx-4'>Users</span>
						</NavLink>
					</CNavItem>
					<CNavItem href='#' onClick={logout}>
						<i>
							<FiLogOut className='text-white iconsize' />
						</i>
						<span className=' item-text mx-4'>Logout</span>
					</CNavItem>
				</CSidebarNav>
			</CSidebar>
		</div>
	);
};

export default Sidebar;
