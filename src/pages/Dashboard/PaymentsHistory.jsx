import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useGetBookings from '../../hooks/queries/bookings/useGetBookings';
import MaxWidth from '../../components/MaxWidth';
import LoadingSpinner from '../../components/LoadingSpinner';
import TableRow3 from '../../components/tableRow3';
import PaymentHistoryTableRow from '../../components/dashboard/PaymentHistory/PaymentHistoryTableRow';

const PaymentsHistory = () => {
    const { user } = useAuth()
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('newest');

    const { data: bookings = [], isLoading, error, isError } = useGetBookings(user?.email);

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    console.log(bookings)

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
                                    <th className="p-3 text-left">Car Image</th>
                                    <th className="p-3 text-left">Car Name</th>
                                    <th className="p-3 text-left">Transition ID</th>
                                    <th className="p-3 text-left">Payment Time</th>
                                    <th className="p-3 text-left">Payment Currency</th>
                                    <th className="p-3 text-left">Payment Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedBookings.length > 0 ? (
                                    sortedBookings.map((booking) => (
                                        <PaymentHistoryTableRow
                                            key={booking._id}
                                            booking={booking}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="text-center py-8 text-secondary">
                                            No Payment found
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

export default PaymentsHistory;