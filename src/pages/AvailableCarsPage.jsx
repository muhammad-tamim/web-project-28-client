import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import Card from '../components/Card';
import TableRow from '../components/TableRow';

const AvailableCarsPage = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [isGridView, setIsGridView] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/cars`)
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>

    // searching
    const filteredCars = cars.filter((car) => car.carModel.toLowerCase().includes(search.toLowerCase()))

    // sorting
    const sortedCars = [...filteredCars].sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.postedDate) - new Date(a.postedDate);
        } else if (sortBy === 'oldest') {
            return new Date(a.postedDate) - new Date(b.postedDate);
        } else if (sortBy === 'lowest') {
            return parseFloat(a.rentalPrice) - parseFloat(b.rentalPrice);
        } else if (sortBy === 'highest') {
            return parseFloat(b.rentalPrice) - parseFloat(a.rentalPrice);
        }
    });

    return (
        <div className='px-4 lg:px-10 my-20'>
            <h1 className='text-center text-4xl font-bold mb-10'>Recent Listing</h1>

            <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mb-8'>
                <input type='text' placeholder='Search...' className='input input-bordered w-full lg:max-w-sm border-gray-200 '
                    onChange={(e) => setSearch(e.target.value)} />

                <div className='flex gap-4'>
                    <select className='select select-bordered border-gray-200'
                        onChange={(e) => setSortBy(e.target.value)} >
                        <option value='newest'>Newest First</option>
                        <option value='oldest'>Oldest First</option>
                        <option value='lowest'>Price: Low to High</option>
                        <option value='highest'>Price: High to Low</option>
                    </select>

                    <button
                        onClick={() => setIsGridView(!isGridView)}
                        className='btn btn-outline btn-primary'
                    >
                        {isGridView ? 'List View' : 'Grid View'}
                    </button>
                </div>
            </div>



            {isGridView ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {sortedCars.map((car) => <Card car={car} key={car._id}></Card>)}
                </div>
            ) : (
                <div className="overflow-x-auto w-full rounded-md border border-gray-200">
                    <table className="table-auto w-full ">
                        <thead className="">
                            <tr>
                                <th className="p-3 text-left">Image</th>
                                <th className="p-3 text-left">Model</th>
                                <th className="p-3 text-left">Description</th>
                                <th className="p-3 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedCars.map((car) => (
                                <TableRow key={car._id} car={car} />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
};

export default AvailableCarsPage;