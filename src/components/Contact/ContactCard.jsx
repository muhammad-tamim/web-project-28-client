import React from 'react';
import { CiClock1, CiLocationOn, CiPhone } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-10'>

            <div className="relative group flex flex-col justify-center gap-2 bg-base-300 hover:bg-primary shadow-sm h-full px-8 py-16 rounded-3xl">
                <p className='text-6xl text-primary group-hover:text-neutral'><MdEmail /></p>
                <div>
                    <h3 className='font-bold text-xl'>Email us</h3>
                    <p className='text-secondary text-sm'>info@renax.com</p>
                </div>
                <p className='text-[150px] text-secondary opacity-5 absolute -right-1 -bottom-5'><MdEmail /></p>
            </div>

            <div className="relative group flex flex-col justify-center gap-2 bg-base-300 hover:bg-primary shadow-sm h-full px-8 py-16 rounded-3xl">
                <p className='text-6xl text-primary group-hover:text-neutral'><CiLocationOn /></p>
                <div>
                    <h3 className='font-bold text-xl'>Our address</h3>
                    <p className='text-secondary text-sm'>Dubai, Water Tower, Office 123</p>
                </div>
                <p className='text-[150px] text-secondary opacity-5 absolute -right-4 -bottom-2'><CiLocationOn /></p>
            </div>

            <div className="relative group flex flex-col justify-center gap-2 bg-base-300 hover:bg-primary shadow-sm h-full px-8 py-16 rounded-3xl">
                <p className='text-6xl text-primary group-hover:text-neutral'><CiClock1 /></p>
                <div>
                    <h3 className='font-bold text-xl'>Opening Hours</h3>
                    <p className='text-secondary text-sm'>Mon-Sun: 8 AM - 7 PM</p>
                </div>
                <p className='text-[150px] text-secondary opacity-5 absolute -right-1 -bottom-2'><CiClock1 /></p>
            </div>

            <div className="relative group flex flex-col justify-center gap-2 bg-base-300 hover:bg-primary shadow-sm h-full px-8 py-16 rounded-3xl">
                <p className='text-6xl text-primary group-hover:text-neutral'><CiPhone /></p>
                <div>
                    <h3 className='font-bold text-xl'>Call us</h3>
                    <p className='text-secondary text-sm'>+971 52-333-4444</p>
                </div>
                <p className='text-[150px] text-secondary opacity-5 absolute -right-1 -bottom-2'><CiPhone /></p>
            </div>

        </div>
    );
};

export default ContactCard;