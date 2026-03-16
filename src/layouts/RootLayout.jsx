import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ScrollToTop></ScrollToTop>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;