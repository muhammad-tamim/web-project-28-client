import React from 'react';
import { Link, useLocation } from 'react-router';
import Navbar from '../components/layouts/Navbar';
import PagesBanner from '../components/layouts/PagesBanner';
import bg from '../assets/images/car1.jpg'
import Footer from '../components/layouts/Footer/Footer';
import { MdOutlineArrowOutward } from 'react-icons/md';

const ErrorPage = () => {
    const location = useLocation();
    return (
        <div>
            <Navbar></Navbar>
            <PagesBanner title={'Page not found'} pageName={'404 page'} bg={bg}></PagesBanner>

            {/* <div className='flex justify-center mt-10'>
                <div className='border h-14 border-primary w-0'></div>
            </div> */}

            <div className='my-10 max-w-3xl mx-auto px-5 md:px-10 xl:px-0 flex flex-col justify-center items-center gap-5 text-center'>
                <h1 className='text-primary text-[100px]'>404</h1>
                <p className='font-medium text-xl'>Sorry, We Can't Find the <span className='text-primary font-bold'>"{location.pathname}"</span> Page!</p>
                <p className='text-secondary text-sm'>The page you are looking for was moved, removed, renamed or never existed.</p>
                <Link to={'/'}><button className='btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1'>Home <span><MdOutlineArrowOutward /></span></button></Link>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;
