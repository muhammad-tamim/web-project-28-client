import React from 'react';
import { NavLink } from 'react-router';
import { FiFileText, FiHome } from 'react-icons/fi';
import { FiPlusSquare, FiCreditCard, FiBookOpen, FiUser, FiUsers, FiLayers, FiTag, FiGrid, FiBarChart2, FiBell } from 'react-icons/fi';
import { FaCarSide, FaMoneyBillTrendUp } from 'react-icons/fa6';
import { LiaCarSideSolid } from 'react-icons/lia';
import { TbPigMoney } from 'react-icons/tb';

const Sidebar = () => {
    return (
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

            <ul className="menu bg-base-200 min-h-full w-56 p-6 flex flex-col gap-4">

                <li className="text-sm text-gray-400 uppercase tracking-wider mb-2">Menu</li>

                {/* common */}
                <li>
                    <NavLink to="/dashboard" end className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiHome className="w-5 h-5" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/profile" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiUser className="w-5 h-5" />
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/notification" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiBell className="w-5 h-5" />
                        <span>Notifications</span>
                    </NavLink>
                </li>

                {/* customer */}
                <li>
                    <NavLink to="/dashboard/customer/bookings-history" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiBookOpen className="w-5 h-5" />
                        <span>Bookings History</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/customer/payments-history" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiCreditCard className="w-5 h-5" />
                        <span>Payments History</span>
                    </NavLink>
                </li>

                {/* seller */}
                <li>
                    <NavLink to="/dashboard/seller/add-car" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiPlusSquare className="w-5 h-5" />
                        <span>Add Car</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/seller/my-cars" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <LiaCarSideSolid className='w-5 h-5' />
                        <span>My Cars</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/seller/my-sales" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <TbPigMoney className='w-5 h-5' />
                        <span>My sales</span>
                    </NavLink>
                </li>


                {/* admin */}
                <li>
                    <NavLink to="/dashboard/admin/manage-users" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiUsers className="w-5 h-5" />
                        <span>Manage Users</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/admin/manage-cars" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiLayers className="w-5 h-5" />
                        <span>Manage Cars</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/admin/manage-brands" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiTag className="w-5 h-5" />
                        <span>Manage Brands</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/admin/manage-categories" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiGrid className="w-5 h-5" />
                        <span>Manage Categories</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/admin/sales-report" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiBarChart2 className="w-5 h-5" />
                        <span>Sales Report</span>
                    </NavLink>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;