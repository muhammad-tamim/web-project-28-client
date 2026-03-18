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
import { bookingsApi } from '../api/bookings.api';

const PaymentSuccessPage = () => {
    const [params] = useSearchParams();
    const tran_id = params.get('tran_id'); // unified transaction ID
    const val_id = params.get('val_id');   // Stripe session ID or SSLCommerz val_id
    const provider = params.get('provider'); // 'stripe' or 'sslcommerz'
    const navigate = useNavigate();
    const { mutateAsync: createBooking } = useCreateBookings();
    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                console.log('Payment params:', { tran_id, val_id, provider });

                if (!tran_id || !provider) {
                    throw new Error('Missing payment info');
                }

                // 🔹 Call correct API based on provider
                let success = false;

                if (provider === 'stripe') {
                    if (!val_id) throw new Error('Missing Stripe session ID');
                    const res = await stripeApi.verifyPayment(tran_id, val_id); // ✅ fixed
                    success = res.success;
                } else if (provider === 'sslcommerz') {
                    const res = await sslcommerzApi.validate({ tran_id, val_id });
                    success = res.success;
                } else {
                    throw new Error('Unknown payment provider');
                }

                if (!success) {
                    throw new Error('Payment validation failed');
                }

                // 🔹 Create booking (idempotent)
                await createBooking({ tran_id });

                // 🔹 Fetch booking info for invoice
                const res = await bookingsApi.getByTranId(tran_id);
                setBooking(res);

            } catch (err) {
                console.error('Payment verification error:', err);
                toast.error(err.message || 'Failed to process payment');
                navigate('/payment-cancel');
            } finally {
                setLoading(false);
            }
        };

        verifyPayment();
    }, [tran_id, val_id, provider, navigate, createBooking]);

    if (loading) {
        return <LoadingSpinner minHScreen="min-h-screen" />;
    }

    return (
        <div>
            <PagesBanner pageName="rentax" title="Your Payment Invoice" />
            <MaxWidth>
                <div className="space-y-20 my-20">
                    <Invoice booking={booking} />
                </div>

                <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-4 my-20">
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