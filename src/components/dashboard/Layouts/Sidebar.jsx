import React from 'react';
import { NavLink } from 'react-router';
import { FiFileText, FiHome } from 'react-icons/fi';
import { FiUser, FiBell } from 'react-icons/fi';
import CustomerMenu from '../Menu/CustomerMenu';
import SellerMenu from '../Menu/SellerMenu';
import AdminMenu from '../Menu/AdminMenu';

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
                <CustomerMenu></CustomerMenu>

                {/* seller */}
                <SellerMenu></SellerMenu>

                {/* admin */}
                <AdminMenu></AdminMenu>

            </ul>
        </div>
    );
};

export default Sidebar;