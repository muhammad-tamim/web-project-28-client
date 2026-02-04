import React from 'react';
import whoWeAreImage from '../../assets/images/who-we-are.png'
import { Link } from 'react-router';
import { MdArrowOutward, MdOutlineArrowOutward } from 'react-icons/md';
import { IoMdCheckmark } from 'react-icons/io';

const WhoWeAre = ({ btnHide }) => {
    return (
        <div>
            <div className='flex justify-center mb-10'>
                <div className='border h-14 border-primary w-0'></div>
            </div>

            <div className='text-center space-y-3 mb-10'>
                <p className='text-primary text-[11px] tracking-[5px]'>RENAX</p>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'><span className='text-primary'>Who</span> we are</h1>
            </div>

            <div className='flex flex-col gap-10 lg:flex-row justify-between'>
                <div className='max-w-xl space-y-5'>
                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>We Are More Than<br /><span className='text-primary'>A Car Rental Company</span></h1>
                    <p className='text-secondary'>RENAX is built on trust, convenience, and premium service. We provide reliable,
                        well-maintained vehicles that make every journey smooth, safe, and enjoyable.
                        Whether it's a short trip or a long adventure, we're here to keep you moving.</p>

                    <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                            <button className="btn btn-circle bg-transparent border-primary">
                                <IoMdCheckmark />
                            </button>
                            <p className='text-secondary'>Wide selection of modern, well-maintained vehicles</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className="btn btn-circle bg-transparent border-primary">
                                <IoMdCheckmark />
                            </button>
                            <p className='text-secondary'>Transparent pricing with no hidden fees</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className="btn btn-circle bg-transparent border-primary">
                                <IoMdCheckmark />
                            </button>
                            <p className='text-secondary'>Easy booking and quick vehicle pickup</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className="btn btn-circle bg-transparent border-primary">
                                <IoMdCheckmark />
                            </button>
                            <p className='text-secondary'>24/7 customer support for a stress-free experience</p>
                        </div>
                    </div>

                    <Link to={'/about'}><button className={`${btnHide} btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1`} > Learn More <span><MdOutlineArrowOutward /></span></button></Link>
                </div>
                <div>
                    <img src={whoWeAreImage} className='w-[500px] h-full rounded-3xl md:mx-auto ' alt="Who we are image" />
                </div>
            </div>
        </div >
    );
};

export default WhoWeAre;