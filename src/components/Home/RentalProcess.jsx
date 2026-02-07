import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';

const RentalProcess = () => {
    return (
        <div>

            <div className='flex justify-center mb-10 mt-40'>
                <div className='border h-14 border-primary w-0'></div>
            </div>

            <div className='text-center space-y-3 mb-10'>
                <p className='text-primary text-[11px] tracking-[5px]'>STEPS</p>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Car Rental <span className='text-primary'>Process</span></h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>


                <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                    <div className='flex items-center gap-5'>
                        <button className="right-1 btn btn-lg btn-circle btn-primary">1</button>
                        <h1 className='text-2xl font-medium'>Choose A Car</h1>
                    </div>
                    <p className='text-gray-500 text-sm'>Browse our wide selection of vehicles and compare features, prices, and availability to find the perfect car for your trip.</p>
                    <Link to={'/available-cars'}><button className='btn btn-primary btn-outline rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1'>Available Cars <span><MdArrowOutward /></span></button></Link>
                </div>

                <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                    <div className='flex items-center gap-5'>
                        <button className="right-1 btn btn-lg btn-circle btn-primary">2</button>
                        <h1 className='text-2xl font-medium'>Book A Car</h1>
                    </div>
                    <p className='text-gray-500 text-sm'>Select your preferred dates, provide the required details, and confirm your booking in just a few simple steps.</p>
                    <Link to={'/available-cars'}><button className='btn btn-primary btn-outline rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1'>Available Cars <span><MdArrowOutward /></span></button></Link>
                </div>

                <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                    <div className='flex items-center gap-5'>
                        <button className="right-1 btn btn-lg btn-circle btn-primary">3</button>
                        <h1 className='text-2xl font-medium'>Verify Bookings</h1>
                    </div>
                    <p className='text-gray-500 text-sm'>Review your booking status, check rental details, and stay updated on approvals or changes from the owner.</p>
                    <Link to={'/my-bookings'}><button className='btn btn-primary btn-outline rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1'>My Bookings <span><MdArrowOutward /></span></button></Link>
                </div>
            </div>

            <div className='flex gap-2 mt-10 justify-center items-center'>
                <p className='text-primary'><FaInfoCircle /></p>
                <p className='text-gray-500 text-sm'>Review your booking status, check rental details, and stay updated on approvals or changes from the owner.</p>
            </div>
        </div>
    );
};

export default RentalProcess;