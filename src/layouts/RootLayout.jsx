import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/layouts/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <p>Footer</p>
        </div>
    );
};

export default RootLayout;