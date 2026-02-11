import React from 'react';
import { NavLink } from 'react-router';
import { FiFileText, FiHome } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

            <ul className="menu bg-base-200 min-h-full w-48 xl:w-52 p-6 flex flex-col gap-4">

                <li className="text-sm text-gray-400 uppercase tracking-wider mb-2">Menu</li>

                <li>
                    <NavLink to="/dashboard" end className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiHome className="w-5 h-5" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/seller/add-car" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiFileText className="w-5 h-5" />
                        <span>Add Car</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/seller/my-cars" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                        <FiFileText className="w-5 h-5" />
                        <span>My Cars</span>
                    </NavLink>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;