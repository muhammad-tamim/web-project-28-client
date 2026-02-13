import React from 'react';
import { FiBarChart2, FiGrid, FiTag, FiUsers } from 'react-icons/fi';
import { NavLink } from 'react-router';

const AdminMenu = () => {
    return (
        <>
            <li>
                <NavLink to="/dashboard/admin/manage-users" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                    <FiUsers className="w-5 h-5" />
                    <span>Manage Users</span>
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
        </>
    );
};

export default AdminMenu;