import React, { use, useState } from 'react';
import PagesBanner from '../components/layouts/PagesBanner';
import MaxWidth from '../components/MaxWidth';
import Pagination from '../components/Pagination';
import useGetCarsByEmail from '../hooks/queries/cars/useGetCarsByEmail';
import { AuthContext } from '../contexts/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import TableRowForMyCars from '../components/TableRowForMyCars';

const MyCars = () => {
    const { user } = use(AuthContext)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('newest');


    const { data, isLoading, error, isError } = useGetCarsByEmail(user?.email, page);

    const { result: cars, meta } = data || {};

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    // searching
    const filteredCars = cars.filter((car) => car.name.toLowerCase().includes(search.toLowerCase()))

    // sorting
    const sortedCars = [...filteredCars].sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.createdAt) - new Date(a.createdAt)
        }
        if (sortBy === 'oldest') {
            return new Date(a.createdAt) - new Date(b.createdAt)
        }
        if (sortBy === 'lowest') {
            return a.dailyRentalPrice - b.dailyRentalPrice
        }
        if (sortBy === 'highest') {
            return b.dailyRentalPrice - a.dailyRentalPrice
        }
        return 0
    })

    return (
        <div>
            {/* <PagesBanner pageName={'rentax'} title={'My Cars'}></PagesBanner> */}
            <MaxWidth>
                <div className='space-y-20 my-20 xl:px-10'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mb-8'>
                        <input type='text' value={search} placeholder='Search...' className='input w-full lg:max-w-sm input-primary focus:outline-none bg-base-300 '
                            onChange={(e) => setSearch(e.target.value)} />

                        <div className='flex gap-4'>
                            <select className='select select-primary focus:outline-none bg-base-300'
                                onChange={(e) => setSortBy(e.target.value)} >
                                <option value='newest'>Newest First</option>
                                <option value='oldest'>Oldest First</option>
                                <option value='lowest'>Price: Low to High</option>
                                <option value='highest'>Price: High to Low</option>
                            </select>
                        </div>
                    </div>


                    <p className="text-sm text-secondary italic text-center mb-2 lg:hidden">
                        Scroll left/right to view the full table:
                    </p>

                    <div className="overflow-x-auto w-full rounded-xl">
                        <div className="overflow-x-auto w-full rounded-xl">
                            <table className="table w-full bg-base-300">
                                <thead>
                                    <tr>
                                        <th className="p-3 text-left font-bold">Image</th>
                                        <th className="p-3 text-left">Name</th>
                                        <th className="p-3 text-left">Brand</th>
                                        <th className="p-3 text-left">Registration Number</th>
                                        <th className="p-3 text-left">Total Booking</th>
                                        <th className="p-3 text-left">Current Status</th>
                                        <th className="p-3 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedCars.length > 0 ? (
                                        sortedCars.map((car) => (
                                            <TableRowForMyCars key={car._id} car={car} />
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center py-8 text-gray-500">
                                                No Cars found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <Pagination page={page} totalPages={meta.totalPages} onPageChange={setPage}></Pagination>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default MyCars;