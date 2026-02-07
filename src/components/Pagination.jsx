import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Pagination = () => {
    return (
        <ul className='space-x-2'>
            <li className='btn btn-circle btn-lg btn-primary text-2xl'>
                <MdKeyboardArrowLeft />
            </li>
            <li className='btn btn-circle btn-lg btn-primary text-2xl'>1</li>
            <li className='btn btn-circle btn-lg btn-primary text-2xl'>2</li>
            <li className='btn btn-circle btn-lg btn-primary text-2xl'>3</li>
            <li className='btn btn-circle btn-lg btn-primary text-2xl'>
                <MdKeyboardArrowRight />
            </li>
        </ul>
    );
};

export default Pagination;