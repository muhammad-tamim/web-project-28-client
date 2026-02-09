import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';

const Card3 = ({ car }) => {
    const { _id, photoUrl, description, dailyRentalPrice, name, year } = car;
    const shortDescription = description.length > 70 ? description.slice(0, 100) + '...' : description

    return (
        <div className="card bg-base-300 shadow-sm">
            <figure>
                <img
                    src={photoUrl} className='w-full h-52 object-cover' alt="Shoes" />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p className='text-sm text-secondary'>{shortDescription}</p>
                <div className="card-actions justify-end">
                    <p><span className='text-primary text-2xl font-bold'>${dailyRentalPrice}</span><sub className='text-gray-500'> / day </sub></p>
                    <Link to={`/car-details/${_id}`}><button className="right-1 btn btn-lg btn-circle btn-primary"><MdArrowOutward /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card3;