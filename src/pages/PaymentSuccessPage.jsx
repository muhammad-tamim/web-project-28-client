import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router';
import toast from 'react-hot-toast';
import { stripeApi } from '../api/stripe.api';
import { sslcommerzApi } from '../api/sslcommerz.api';
import { MdOutlineArrowOutward } from 'react-icons/md';
import useCreateBookings from '../hooks/queries/bookings/useCreateBookings';
import PagesBanner from '../components/layouts/PagesBanner';
import Invoice from '../components/PaymetnSuccess/Invoice';
import MaxWidth from '../components/MaxWidth';
import LoadingSpinner from '../components/LoadingSpinner';

const PaymentSuccessPage = () => {
    const [params] = useSearchParams();
    const tran_id = params.get('tran_id'); // unified for Stripe & SSLCommerz
    const val_id = params.get('val_id');   // Stripe session ID or SSLCommerz val_id
    const navigate = useNavigate();
    const { mutate: createCar } = useCreateBookings()
    const [booking, setBooking] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const verifyPayment = async () => {
            try {
                if (!tran_id || !val_id) {
                    toast.error('No payment info provided.');
                    navigate('/cars');
                    return;
                }

                let success = false;

                // Wait for Stripe or SSLCommerz validation
                if (params.get('provider') === 'stripe') {
                    const res = await stripeApi.verifyPayment(tran_id, val_id);
                    success = res.success;
                    if (success) toast.success('Payment successful via Stripe!');
                    else toast.error('Stripe payment verification failed.');
                } else {
                    success = await sslcommerzApi.validate(tran_id, val_id);
                    if (success) toast.success('Payment successful via SSLCommerz!');
                    else toast.error('Payment verification failed.');
                }

                if (success) {
                    createCar(
                        { tran_id },
                        {
                            onSuccess: (booking) => {
                                toast.success('Booking created successfully!');
                                setBooking(booking);
                                setLoading(false);
                            },
                            onError: (err) => {
                                toast.error(err.message || 'Failed to create booking');
                                setLoading(false);
                            },
                        }
                    );
                } else {
                    setLoading(false);
                }
            } catch (err) {
                toast.error(err.message || 'Payment verification failed');
                setLoading(false);
            }
        };

        verifyPayment();
    }, [tran_id, val_id, navigate, params, createCar]);


    if (loading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>
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
