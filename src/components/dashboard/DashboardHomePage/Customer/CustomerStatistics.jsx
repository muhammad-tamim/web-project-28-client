import React from 'react';
import { FaShoppingBag, FaMoneyBillWave } from 'react-icons/fa';
import Card from '../Card';
import useAuth from '../../../../hooks/useAuth';
import useGetBookings from '../../../../hooks/queries/bookings/useGetBookings';
import LoadingSpinner from '../../../LoadingSpinner';
import PaymentHistory from './PaymentHistory';
import BookingHistory from './BookingHistory';

const CustomerStatistics = () => {

    const { user } = useAuth();
    const { data: bookings, isLoading, error, isError } = useGetBookings(user.email);

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'} />;
    }

    if (isError) {
        return (
            <h2 className="text-red-500 text-center my-20">
                Error: {error.message}
            </h2>
        );
    }


    const totalBookings = bookings.length;
    const totalAmount = bookings.reduce((sum, booking) => sum + Number(booking.payment.total_amount), 0);
    const bestPayment = bookings.reduce((max, booking) => Number(booking.payment.total_amount) > max ? Number(booking.payment.total_amount) : max, 0)
    return (
        <div className='space-y-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 bg-base-300 rounded-3xl p-5 md:p-10">
                <Card title="Total Bookings" value={totalBookings} icon={<FaShoppingBag className="size-6" />} />
                <Card title="Total Payments" value={`$${totalAmount}`} icon={<FaMoneyBillWave className="size-6" />} />
                <Card title="Best Payments" value={`$${bestPayment}`} icon={<FaMoneyBillWave className="size-6" />} />
            </div>
            <div className='bg-base-300 rounded-3xl p-5 md:p-10'>
                <PaymentHistory bookings={bookings}></PaymentHistory>
            </div>
            <div className='bg-base-300 rounded-3xl p-5 md:p-10'>
                <BookingHistory bookings={bookings}></BookingHistory>
            </div>
        </div>
    );
};

export default CustomerStatistics;
