import React from 'react';
import { NavLink } from 'react-router';
import { FiFileText, FiHome } from 'react-icons/fi';
import { FiUser, FiBell } from 'react-icons/fi';
import CustomerMenu from '../Menu/CustomerMenu';
import SellerMenu from '../Menu/SellerMenu';
import AdminMenu from '../Menu/AdminMenu';
import CommonMenu from '../Menu/CommonMenu';
import useGetUser from '../../../hooks/queries/users/usegetUser';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../LoadingSpinner';

const Sidebar = () => {
    const { user } = useAuth()
    const { data } = useGetUser(user?.email);

    return (
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

            <ul className="menu bg-base-200 min-h-full w-56 p-6 flex flex-col gap-4">

                <li className="text-sm text-gray-400 uppercase tracking-wider mb-2">Menu</li>

                <CommonMenu></CommonMenu>
                {data?.role === 'customer' && <CustomerMenu></CustomerMenu>}
                {data?.role === 'seller' && <SellerMenu></SellerMenu>}
                {data?.role === 'admin' && <AdminMenu></AdminMenu>}

            </ul>
        </div>
    );
};

export default Sidebar;