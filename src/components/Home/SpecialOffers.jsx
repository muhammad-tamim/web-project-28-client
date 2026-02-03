import React from 'react';
import { Link } from 'react-router';

const offers = [
    {
        title: 'Economy Drive',
        price: '$19.99',
        description: 'Perfect for quick trips and budget-friendly rides.',
        image: 'https://shorturl.at/swB3Y',
    },

    {
        title: 'Family Package',
        price: '$29.99',
        description: 'Spacious and safe rides for your whole family.',
        image: 'https://shorturl.at/gANxY',
    },
    {
        title: 'Adventure Pro',
        price: '$49.99',
        description: 'For continuous road trips and off-road journeys.',
        image: 'https://shorturl.at/JXyev',
    },
    {
        title: 'Business Elite',
        price: 'Custom',
        description: 'Tailored plans for corporate clients and executives.',
        image: 'https://shorturl.at/middU',
    },
];

const SpecialOffers = () => {

    return (
        <div className=''>
            <h1 className='text-center text-4xl font-bold mb-10'>Special Offers</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
                {offers.map((offer, index) => <div key={index}>

                    <div className="border border-white flex flex-col grow p-6 space-y-6 rounded-xl shadow-md sm:p-8">
                        <div className="space-y-2">
                            <h4 className="text-2xl font-bold">{offer.title}</h4>
                            <span className="text-6xl font-bold">{offer.price}</span>
                        </div>
                        <p className="leading-relaxed">{offer.description}</p>
                        <div>
                            <img src={offer.image} className="rounded-lg shadow-md w-full object-cover" />
                        </div>
                        <Link to={'/available-cars'}>
                            <button className="btn btn-primary btn-sm">Learn More</button>
                        </Link>
                    </div>

                </div>)}
            </div>
        </div>
    );
};

export default SpecialOffers;