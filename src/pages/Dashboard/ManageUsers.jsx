import React, { useState } from 'react';
import MaxWidth from '../../components/MaxWidth';
import useGetUsers from '../../hooks/queries/users/useGetUsers';
import LoadingSpinner from '../../components/LoadingSpinner';
import Pagination from '../../components/Pagination';
import TableRowForManageUsers from '../../components/dashboard/ManageUsers/TableRowForManageUsers';

const ManageUsers = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('newest')

    const { data, isLoading, isError, error } = useGetUsers(page)

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    const { result: users = [], meta = {} } = data;

    // searching
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    // sorting
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.createdAt) - new Date(a.createdAt)
        }
        if (sortBy === 'oldest') {
            return new Date(a.createdAt) - new Date(b.createdAt)
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
                                        <th className="p-3">Image</th>
                                        <th className="p-3">Name</th>
                                        <th className="p-3">Email</th>
                                        <th className="p-3">Role</th>
                                        <th className="p-3">Want to Seller</th>
                                        <th className="p-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedUsers.length > 0 ? (
                                        sortedUsers.map((user) => (
                                            <TableRowForManageUsers key={user._id} user={user} />
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center py-8 text-gray-500">
                                                No data found
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

export default ManageUsers;