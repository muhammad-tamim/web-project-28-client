import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const BlogCategory = () => {
    return (
        <div className='bg-base-300 p-10 rounded-3xl space-y-3'>
            <h3 className='font-bold text-2xl'>Categories</h3>
            <hr className='text-gray-300' />
            <ul className='space-y-2 text-secondary'>
                <span className='flex items-center gap-1'>
                    <MdKeyboardArrowRight />
                    <li>Car Rental</li>
                </span>
                <span className='flex items-center gap-1'>
                    <MdKeyboardArrowRight />
                    <li>Vehicles</li>
                </span>
                <span className='flex items-center gap-1'>
                    <MdKeyboardArrowRight />
                    <li>Rent A Car</li>
                </span>
                <span className='flex items-center gap-1'>
                    <MdKeyboardArrowRight />
                    <li>Rental Service</li>
                </span>
            </ul>
        </div>
    );
};

export default BlogCategory;