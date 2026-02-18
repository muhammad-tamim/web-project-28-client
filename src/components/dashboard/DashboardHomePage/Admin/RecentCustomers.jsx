import React from 'react';
import TableRow from './TableRow';
import useGetRecentCustomers from '../../../../hooks/queries/users/useGetRecentCustomers';
import LoadingSpinner from '../../../LoadingSpinner';

const RecentCustomers = () => {
    const { data: recentCustomers, isLoading, isError, error } = useGetRecentCustomers()

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }


    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary">Recent Customers</h2>
                <p className="text-sm text-secondary mt-1">A list of recently registered customers with their account details.</p>
            </div>

            <div>
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
                                    <th className="p-3">Account Created</th>
                                    <th className="p-3">Last Login</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentCustomers.length > 0 ? (
                                    recentCustomers.map((customer) => (
                                        <TableRow key={customer._id} user={customer} />
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
            </div>
        </div>
    );
};

export default RecentCustomers;