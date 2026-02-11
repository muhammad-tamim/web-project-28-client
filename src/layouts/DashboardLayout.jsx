import React from 'react';
import { NavLink, Outlet } from 'react-router';
import DashboardNavbar from '../components/dashboard/Layouts/DashboardNavbar';
import { FiFileText, FiHome } from 'react-icons/fi';
import Sidebar from '../components/dashboard/Layouts/Sidebar';

const DashboardLayout = () => {
    return (
        <div className="drawer xl:drawer-open">

            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">

                <DashboardNavbar></DashboardNavbar>

                <div>
                    <Outlet></Outlet>
                </div>

            </div>

            <Sidebar></Sidebar>

        </div>
    );
};

export default DashboardLayout;