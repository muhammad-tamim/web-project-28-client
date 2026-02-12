import React, { useState } from 'react';
import PagesBanner from '../../components/layouts/PagesBanner';
import MaxWidth from '../../components/MaxWidth';
import useAuth from '../../hooks/useAuth';
import useGetBookings from '../../hooks/queries/bookings/useGetBookings';
import LoadingSpinner from '../../components/LoadingSpinner';
import TableRow3 from '../../components/tableRow3';

const BookingsHistory = () => {
    const { user } = useAuth()
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('newest');

    const { data: bookings = [], isLoading, error, isError } = useGetBookings(user?.email);

    localStorage.setItem("bookingsCount", bookings?.length)

    if (isLoading) {
        return <LoadingSpinner marginY={'my-20'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    // searching
    const filteredBookings = bookings.filter((booking) => booking.car.name.toLowerCase().includes(search.toLowerCase()))

    // sorting
    const sortedBookings = [...filteredBookings].sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.car.createdAt) - new Date(a.car.createdAt)
        }
        if (sortBy === 'oldest') {
            return new Date(a.car.createdAt) - new Date(b.car.createdAt)
        }
        if (sortBy === 'lowest') {
            return a.car.dailyRentalPrice - b.car.dailyRentalPrice
        }
        if (sortBy === 'highest') {
            return b.car.dailyRentalPrice - a.car.dailyRentalPrice
        }
        return 0
    })
    return (
        <div>
            <PagesBanner pageName={'rentax'} title={'Bookings History'}></PagesBanner>

            <MaxWidth>
                <div className='space-y-20 my-20 xl:px-10'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mb-8'>
                        <input type='text' value={search} placeholder='Search...' className='input w-full lg:max-w-sm input-primary focus:outline-none bg-base-300 '
                            onChange={(e) => setSearch(e.target.value)} />

                        <div className='flex gap-4'>
                            <select value={sortBy} className='select select-primary focus:outline-none bg-base-300'
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
                        <table className="table w-full bg-base-300">
                            <thead>
                                <tr>
                                    <th className="p-3 text-left">Image</th>
                                    <th className="p-3 text-left">Name</th>
                                    <th className="p-3 text-left">Start Date</th>
                                    <th className="p-3 text-left">End Date</th>
                                    <th className="p-3 text-left">Status</th>
                                    <th className="p-3 text-left">Total Cost</th>
                                    <th className="p-3 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedBookings.length > 0 ? (
                                    sortedBookings.map((booking) => (
                                        <TableRow3
                                            key={booking._id}
                                            booking={booking}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="text-center py-8 text-gray-500">
                                            No bookings found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MaxWidth>

        </div>
    );
};

export default BookingsHistory;