import React, { use } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link, NavLink } from 'react-router';
import { FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const FBody = () => {
    const { user } = use(AuthContext)
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-10">

                <div className='space-y-4'>
                    <p><Link to={'/'} className='text-3xl font-bold tracking-wider'><span className='text-primary'>R</span>ENAX</Link></p>
                    <p className='text-sm'>delivers premium car rental services designed for comfort, flexibility,
                        and trust. Whether for business or leisure, we help you move freely with style
                        and peace of mind.</p>
                    <div className="flex gap-5 items-center">
                        <button className="btn btn-lg btn-circle btn-primary">
                            <FaWhatsapp />
                        </button>
                        <button className="btn btn-lg btn-circle btn-primary">
                            <FaFacebookF />
                        </button>
                        <button className="btn btn-lg btn-circle btn-primary">
                            <FaYoutube />
                        </button>
                    </div>
                </div>


                <div className='lg:justify-items-center'>
                    <h1 className="font-bold text-2xl mb-4">Quick Links</h1>

                    <ul className="gap-5 list-disc marker:text-primary ml-5 space-y-2">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ''}>Home</NavLink></li>
                        <li><NavLink to="/available-cars" className={({ isActive }) => isActive ? "text-primary" : ''}>Available Cars</NavLink></li>
                        {user &&
                            <>
                                <li><NavLink to="/add-car" className={({ isActive }) => isActive ? "text-primary" : ''}>Add Car</NavLink></li>
                                <li><NavLink to="/my-cars" className={({ isActive }) => isActive ? "text-primary" : ''}>My Cars</NavLink></li>
                            </>
                        }
                        <li>
                            {user &&
                                <NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-primary" : ''}>My Bookings</NavLink>
                            }
                        </li>
                    </ul>
                </div>


                <div className="space-y-4">
                    <h1 className="font-bold text-2xl mb-4">Subscribe</h1>
                    <p className='text-sm'>Want to be notified about our services. Just sign up and we'll send you a notification by email.</p>
                    <div className='relative flex items-center'>
                        <input type="email" className='input w-full input-xl rounded-full input-primary focus:outline-none text-sm' placeholder='Email Address' />
                        <button className="absolute right-1 btn btn-lg btn-circle btn-primary">
                            <MdArrowOutward />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FBody;