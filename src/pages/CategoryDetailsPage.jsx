import React, { useState } from 'react';
import useGetCarsByCategory from '../hooks/queries/cars/useGetCarsByCategory';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import PagesBanner from '../components/layouts/PagesBanner';
import MaxWidth from '../components/MaxWidth';
import Card3 from '../components/Cards/Card3';
import TableRow from '../components/TableRow';
import Pagination from '../components/Pagination';

const CategoryDetailsPage = () => {
    const { category } = useParams()
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [isGridView, setIsGridView] = useState(true);


    const { data, isLoading, error, isError } = useGetCarsByCategory(category, page);

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
            <PagesBanner pageName={'rentax'} title={'Brands Details'}></PagesBanner>
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

                    {sortedCars.length === 0 && <div className="text-center py-20">
                        <h2 className="text-3xl font-semibold text-secondary">
                            No cars found in this category
                        </h2>
                    </div>}

                    {isGridView ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {sortedCars.map((car) => <Card3 car={car} key={car._id}></Card3>)}
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

                    <div className='flex justify-center'>
                        <Pagination page={page} totalPages={meta.totalPages} onPageChange={setPage}></Pagination>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default CategoryDetailsPage;