import React from 'react';
import { FiBookOpen, FiCreditCard } from 'react-icons/fi';
import { NavLink } from 'react-router';

const CustomerMenu = () => {
    return (
        <>
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
        </>
    );
};

export default CustomerMenu;