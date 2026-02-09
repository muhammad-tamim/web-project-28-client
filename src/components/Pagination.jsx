import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Pagination = ({ page, totalPages, onPageChange }) => {

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePrevious = () => {
        if (page > 1) onPageChange(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) onPageChange(page + 1);
    };


    return (
        <ul className='space-x-2'>
            <li className={`btn btn-circle btn-lg btn-primary text-2xl ${page === 1 ? 'btn-disabled opacity-50 cursor-not-allowed' : ''}`}
                onClick={handlePrevious}>
                <MdKeyboardArrowLeft />
            </li>
            {pageNumbers.map(num => <li className={`btn btn-circle btn-lg text-2xl ${num === page ? 'btn-primary' : 'btn-outline btn-primary'}`}
                onClick={() => onPageChange(num)}>{num}</li>)}
            <li className={`btn btn-circle btn-lg btn-primary text-2xl ${page === totalPages ? 'btn-disabled opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleNext}>
                <MdKeyboardArrowRight />
            </li>
        </ul>
    );
};

export default Pagination;