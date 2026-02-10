import React, { useState } from 'react';
import useGetSearch from '../hooks/queries/cars/useGetSearch';
import { useSearchParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import PagesBanner from '../components/layouts/PagesBanner';
import MaxWidth from '../components/MaxWidth';
import Card3 from '../components/Cards/Card3';
import Pagination from '../components/Pagination';
import TableRow from '../components/TableRow';

const SearchPage = () => {
    const [searchParams] = useSearchParams();

    const brand = searchParams.get('brand')
    const category = searchParams.get('category')
    const sort = searchParams.get('sort')

    console.log(brand, category, sort)

    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [isGridView, setIsGridView] = useState(true);

    const { data, isLoading, isError, error } = useGetSearch(brand, category, sort, page)
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
            <PagesBanner pageName={'rentax'} title={'Search Result'}></PagesBanner>
            <MaxWidth>
                <div className='space-y-20 my-20'>
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

                            <button
                                onClick={() => setIsGridView(!isGridView)}
                                className='btn btn-outline btn-primary'
                            >
                                {isGridView ? 'List View' : 'Grid View'}
                            </button>
                        </div>
                    </div>

                    {isGridView ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {sortedCars.map((car) => <Card3 car={car} key={car._id}></Card3>)}
                        </div>
                    ) : (
                        <>
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
                                                <th className="p-3 text-left">Description</th>
                                                <th className="p-3 text-left">Rental price</th>
                                                <th className="p-3 text-left">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sortedCars.length > 0 ? (
                                                sortedCars.map((car) => (
                                                    <TableRow key={car._id} car={car} />
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
                        </>
                    )}

                    <div className='flex justify-center'>
                        <Pagination page={page} totalPages={meta.totalPages} onPageChange={setPage}></Pagination>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default SearchPage;  