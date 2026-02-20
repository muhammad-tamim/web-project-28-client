import React from 'react';
import Invoice from '../../components/PaymetnSuccess/Invoice';
import useAuth from '../../hooks/useAuth';
import useGetBookings from '../../hooks/queries/bookings/useGetBookings';
import LoadingSpinner from '../../components/LoadingSpinner';

const InvoicePage = () => {
    const { user } = useAuth()
    const { data: bookings, isLoading, isError, error } = useGetBookings(user?.email)

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'} />;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>;
    }


    return (
        <div className='space-y-20 my-20 xl:px-10'>
            <Invoice bookings={bookings}></Invoice>
        </div>
    );
};

export default InvoicePage;