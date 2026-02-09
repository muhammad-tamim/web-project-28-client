import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';

const DetailsCard = ({ car }) => {
    const { name, brand, model, category, year, description, features, photoUrl,
        registrationNumber, availability, bookingStatus, bookingCount, email, createdAt, } = car || {};
    return (
        <div className="card bg-base-300 w-full shadow-sm rounded-3xl overflow-hidden">

            <figure>
                <img src={photoUrl} alt={name} className="w-full h-[400px] object-cover" />
            </figure>

            <div className="card-body space-y-6">

                <div className="flex flex-wrap gap-2">
                    <div className="badge badge-outline badge-primary">{category}</div>
                    <div className="badge badge-outline badge-primary">{year}</div>
                    <div className={`badge badge-outline ${availability ? 'badge-primary' : 'badge-error'}`}>
                        {availability ? 'Available' : 'Not Available'}
                    </div>
                </div>

                <div className="space-y-1">
                    <h2 className="card-title font-bold text-3xl">{name}</h2>
                    <p className="text-secondary">
                        {brand} • {model} • Reg: {registrationNumber}
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold text-xl">General Information</h3>
                    <p className="text-secondary leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="font-semibold text-xl">Features</h3>
                    <div className="flex flex-wrap gap-2">
                        {features?.split(',').map((feature, index) => (
                            <span key={index} className="badge badge-outline badge-secondary">
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-secondary text-sm">
                    <p>
                        <span className="font-medium">Bookings:</span> {bookingCount}
                    </p>
                    <p>
                        <span className="font-medium">Owner:</span> {email}
                    </p>
                    <p>
                        <span className="font-medium">Added:</span>{' '}
                        {new Date(createdAt).toLocaleDateString()}
                    </p>
                    <p>
                        <span className="font-medium">Status:</span>{' '}
                        {bookingStatus ? 'Currently Booked' : 'Not Booked'}
                    </p>
                </div>

                <div>
                    <Link to="/cars"><button className="w-full btn-outline btn btn-primary rounded-full sm:btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1">
                        Explore More Cars <MdOutlineArrowOutward />
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;