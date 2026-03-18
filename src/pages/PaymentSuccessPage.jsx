import React from 'react';
import { useSearchParams, Link } from 'react-router';
import toast from 'react-hot-toast';
import { MdOutlineArrowOutward } from 'react-icons/md';
import PagesBanner from '../components/layouts/PagesBanner';
import Invoice from '../components/PaymetnSuccess/Invoice';
import MaxWidth from '../components/MaxWidth';
import LoadingSpinner from '../components/LoadingSpinner';
import useGetCarsByTranId from '../hooks/queries/bookings/useGetBookingByTranId';

const PaymentSuccessPage = () => {
    const [params] = useSearchParams();
    const tran_id = params.get('tran_id');

    const { data: booking, isLoading, isError, error } = useGetCarsByTranId(tran_id);

    if (isLoading) return <LoadingSpinner minHScreen="min-h-screen" />;

    if (isError) {
        console.error('Booking fetch error:', error);
        toast.error(error?.message || 'Failed to load booking details');
    }

    return (
        <div>
            <PagesBanner pageName="rentax" title="Your Booking Invoice" />
            <MaxWidth>
                <div className="space-y-20 my-20">
                    {booking ? (
                        <Invoice booking={booking} />
                    ) : (
                        <p className="text-center text-red-500">Invoice data not available</p>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-4 my-20">
                    <Link to="/my-bookings">
                        <button className="btn btn-primary rounded-full btn-lg flex items-center gap-2">
                            See All Bookings <MdOutlineArrowOutward />
                        </button>
                    </Link>

                    <Link to="/cars">
                        <button className="btn btn-outline btn-primary rounded-full btn-lg flex items-center gap-2">
                            Add More Cars <MdOutlineArrowOutward />
                        </button>
                    </Link>
                </div>
            </MaxWidth>
        </div>
    );
};

export default PaymentSuccessPage;