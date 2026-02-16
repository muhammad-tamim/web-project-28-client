import React from 'react';
import { FiBell, FiHome, FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router';

const CommonMenu = () => {
    return (
        <>
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
        </>
    );
};

export default CommonMenu;