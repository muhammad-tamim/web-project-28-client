import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';

const Card = ({ car }) => {
    const { _id, imageUrl, carModel, description } = car;
    const shortDescription = description.length > 70 ? description.slice(0, 100) + '...' : description

    return (
        <div className="card bg-base-300 shadow-sm">
            <figure>
                <img
                    src={imageUrl} className='w-full h-52 object-cover' alt="Shoes" />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title font-bold text-2xl">Card Title 2025</h2>
                <p className='text-sm text-secondary'>{shortDescription}</p>
                <div className="card-actions justify-end">
                    <p><span className='text-primary text-2xl font-bold'>$750</span><sub className='text-gray-500'> / day </sub></p>
                    <button className="right-1 btn btn-lg btn-circle btn-primary"><MdArrowOutward /></button>
                </div>
            </div>
        </div>
    );
};

export default Card;