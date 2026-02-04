import React, { useEffect, useState } from 'react';
import Card from '../Card';
import LoadingSpinner from '../LoadingSpinner';

const RecentListing = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/cars`)
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <LoadingSpinner marginY={'my-20'}></LoadingSpinner>

    return (
        <div className=''>
            <div className='flex justify-center mb-10'>
                <div className='border h-14 border-primary w-0'></div>
            </div>

            <div className='text-center space-y-3 mb-10'>
                <p className='text-primary text-[11px] tracking-[5px]'>Select Your Car</p>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Browse <span className='text-primary'>Recent Vehicles</span></h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                {cars.map((car) => <Card car={car} key={car._id}></Card>)}

            </div>
        </div>
    );
};

export default RecentListing;