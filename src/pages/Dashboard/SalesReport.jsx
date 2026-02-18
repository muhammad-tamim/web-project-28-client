import React, { useState } from 'react';
import MaxWidth from '../../components/MaxWidth';
import LoadingSpinner from '../../components/LoadingSpinner';
import useFindAllBookingsWithPagination from '../../hooks/queries/bookings/useFindAllBookingsWithPagination';
import TableRowForSalesReport from '../../components/dashboard/SalesReport/TableRowForSalesReport';
import Pagination from '../../components/Pagination';

const SalesReport = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('newest')
    const { data, isLoading, isError, error } = useFindAllBookingsWithPagination(page)


    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    const { result: bookings = [], meta = {} } = data || {};


    // searching
    const filteredBookings = (bookings || []).filter((booking) =>
        booking.car.name.toLowerCase().includes(search.toLowerCase())
    );

    // sorting
    const sortedBookings = [...filteredBookings].sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.createdAt) - new Date(a.createdAt)
        }
        if (sortBy === 'oldest') {
            return new Date(a.createdAt) - new Date(b.createdAt)
        }
        if (sortBy === 'lowest') {
            return a.totalCost - b.totalCost
        }
        if (sortBy === 'highest') {
            return b.totalCost - a.totalCost
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
                            <select className='select select-primary focus:outline-none bg-base-300'
                                onChange={(e) => setSortBy(e.target.value)} >
                                <option value='newest'>Newest First</option>
                                <option value='oldest'>Oldest First</option>
                                <option value='lowest'>Price: Low to High</option>
                                <option value='highest'>Price: High to Low</option>
                            </select>

                            <button className='btn btn-primary btn-outline'>Download Report</button>
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
                                        <th className="p-3">Car Image</th>
                                        <th className="p-3">Car Name</th>
                                        <th className="p-3">Seller Email</th>
                                        <th className="p-3">Customer Email</th>
                                        <th className="p-3">Payment Date</th>
                                        <th className="p-3">Transition ID</th>
                                        <th className="p-3">Payment Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedBookings.length > 0 ? (
                                        sortedBookings.map((booking) => (
                                            <TableRowForSalesReport key={booking._id} booking={booking} />
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center py-8 text-gray-500">
                                                No Brands found
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
        </div >
    );
};

export default SalesReport;