import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router';
import toast from 'react-hot-toast';
import { stripeApi } from '../api/stripe.api';
import { sslcommerzApi } from '../api/sslcommerz.api';
import LoadingSpinner from '../components/LoadingSpinner';
import { MdOutlineArrowOutward } from 'react-icons/md';
import useCreateBookings from '../hooks/queries/bookings/useCreateBookings';
import PagesBanner from '../components/layouts/PagesBanner';
import Invoice from '../components/PaymetnSuccess/Invoice';
import MaxWidth from '../components/MaxWidth';
import useGetBookings from '../hooks/queries/bookings/useGetBookings';
import useAuth from '../hooks/useAuth';

const PaymentSuccessPage = () => {
    const { user } = useAuth()
    const [params] = useSearchParams();
    const tran_id = params.get('tran_id'); // unified for Stripe & SSLCommerz
    const val_id = params.get('val_id');   // Stripe session ID or SSLCommerz val_id
    const navigate = useNavigate();
    const { mutate: createCar } = useCreateBookings()
    const [booking, setBooking] = useState();
    const { data: bookings, isLoading, isError, error } = useGetBookings(user?.email)


    useEffect(() => {
        const verifyPayment = async () => {
            try {
                if (!tran_id || !val_id) {
                    toast.error('No payment info provided.');
                    navigate('/cars');
                    return;
                }

                let success = false;

                // Unified verification API for Stripe & SSLCommerz
                if (params.get('provider') === 'stripe') {
                    const res = await stripeApi.verifyPayment(tran_id, val_id);
                    success = res.success;
                    if (success) toast.success('Payment successful via Stripe!');
                    else toast.error('Stripe payment verification failed.');
                } else {
                    // SSLCommerz
                    success = await sslcommerzApi.validate(tran_id, val_id);
                    if (success) toast.success('Payment successful via SSLCommerz!');
                    else toast.error('Payment verification failed.');
                }

                if (success) {
                    createCar({ tran_id }, {
                        onSuccess: (booking) => {
                            toast.success('Booking created successfully!')
                            setBooking(booking)
                        },
                        onError: (err) => toast.error(err.message || 'Failed to create booking')
                    });

                }
            } catch (err) {
                toast.error(err.message || 'Payment verification failed');
            }
        };

        verifyPayment();

    }, [tran_id, val_id, navigate, params, createCar]);

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'} />;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>;
    }

    if (bookings) {
        localStorage.setItem("bookingsCount", bookings.length)
    }

    return (
        <div>
            <PagesBanner pageName={'rentax'} title={'Your Payment Invoice'}></PagesBanner>
            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <Invoice booking={booking}></Invoice>
                </div>

                <div className="flex flex-col sm:flex-row w-full justify-center items-center  gap-4 my-20">
                    <Link to="/my-bookings">
                        <button className="btn btn-primary rounded-full btn-lg flex items-center gap-2">
                            <span>See All Bookings</span>
                            <MdOutlineArrowOutward />
                        </button>
                    </Link>

                    <Link to="/cars">
                        <button className="btn btn-outline btn-primary rounded-full btn-lg flex items-center gap-2">
                            <span>Add More Cars</span>
                            <MdOutlineArrowOutward />
                        </button>
                    </Link>
                </div>
            </MaxWidth>
        </div>
    );
};

export default PaymentSuccessPage;
