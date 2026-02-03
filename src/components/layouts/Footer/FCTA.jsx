import React from 'react';
import car1 from '../../../assets/images/car1.jpg'
import { FaWhatsapp } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const FCTA = () => {
    // parallax background effect
    return (
        <div className="relative min-h-[60vh] flex items-center bg-fixed bg-center bg-cover"
            style={{
                backgroundImage:
                    `url(${car1})`,
            }}
        >
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative z-10 w-full">
                <div className="flex flex-col justify-around items-center text-white space-y-8 text-center py-5 px-5 md:py-0 md:px-0">
                    <div className='space-y-2'>
                        <p className='text-primary text-xs tracking-[4px]'>RENT YOUR CAR</p>
                        <h3 className='text-4xl font-bold'>Interested in Renting?</h3>
                        <p className='text-sm text-secondary'>Don't hesitate and send us a message.</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                        <button className='btn btn-primary rounded-full btn-xl text-sm text-black/80 px-12 font-normal hover:-translate-y-1 duration-200 transition'><FaWhatsapp /> WhatsApp</button>
                        <button className='btn btn-primary btn-outline rounded-full btn-xl text-sm text-white hover:text-black/80 px-12 font-normal hover:-translate-y-1 duration-200 transition'>Rent Now  <MdArrowOutward /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FCTA;