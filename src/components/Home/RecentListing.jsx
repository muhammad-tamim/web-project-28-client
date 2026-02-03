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
            <h1 className='text-center text-4xl font-bold mb-10'>Recent Listing</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20'>

                {cars.map((car) => <Card car={car} key={car._id}></Card>)}

            </div>
        </div>
    );
};

export default RecentListing;