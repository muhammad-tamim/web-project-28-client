import React from 'react';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const GetInTouch = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-20'>
            <div className='w-full lg:w-1/2'>
                <h2 className='text-center text-primary font-bold text-2xl mb-10'>Get in touch</h2>
                <ContactForm></ContactForm>
            </div>
            <div className='w-full lg:w-1/2'>
                <h2 className='text-center text-primary font-bold text-2xl mb-10'>Location</h2>
                <ContactMap></ContactMap>
            </div>
        </div>
    );
};

export default GetInTouch;