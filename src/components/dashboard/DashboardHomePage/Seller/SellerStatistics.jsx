import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useGetBookingsBySellerEmail from '../../../../hooks/queries/bookings/useGetBookingsBySellerEmail';
import LoadingSpinner from '../../../LoadingSpinner';
import Card from '../Card';
import { FaMoneyBillWave, FaShoppingBag } from 'react-icons/fa';
import CarPaymentHistory from './CarPaymentHistory';
import SalesHistoryByMonth from './SalesHistoryByMonth';

const SellerStatistics = () => {
    const { user } = useAuth()
    const { data: bookings, isLoading, error, isError } = useGetBookingsBySellerEmail(user.email)

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'} />;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    const totalBookings = bookings?.length
    const totalRevenue = bookings.reduce((sum, booking) => sum + booking.payment.amount, 0)
    const bestPayment = bookings.reduce((max, booking) => booking.payment.amount > max ? booking.payment.amount : max, 0)

    return (
        <div className='space-y-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 bg-base-300 rounded-3xl p-5 md:p-10">
                <Card title="Total Selling" value={totalBookings} icon={<FaShoppingBag className="size-6" />} />
                <Card title="Total Revenue" value={`$${totalRevenue}`} icon={<FaMoneyBillWave className="size-6" />} />
                <Card title="Best Payments" value={`$${bestPayment}`} icon={<FaMoneyBillWave className="size-6" />} />
            </div>
            <div className='bg-base-300 rounded-3xl p-5 md:p-10'>
                <CarPaymentHistory bookings={bookings}></CarPaymentHistory>
            </div>
            <div className='bg-base-300 rounded-3xl p-5 md:p-10'>
                <SalesHistoryByMonth bookings={bookings}></SalesHistoryByMonth>
            </div>
        </div>
    );
};

export default SellerStatistics;