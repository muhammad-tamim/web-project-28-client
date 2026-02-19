import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { stripeApi } from '../api/stripe.api';
import LoadingSpinner from '../components/LoadingSpinner';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { sslcommerzApi } from '../api/sslcommerz.api';

const PaymentSuccessPage = () => {
    const [params] = useSearchParams();
    const sessionId = params.get('session_id'); // Stripe
    const tran_id = params.get('tran_id');      // SSLCommerz
    const val_id = params.get('val_id');        // SSLCommerz
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timer;

        const verifyPayment = async () => {
            try {
                let success = false;

                if (sessionId) {
                    // Stripe flow
                    const res = await stripeApi.verifyPayment(sessionId);
                    success = res.success;
                    if (success) toast.success(res.message);
                    else toast.error(res.message);
                } else if (tran_id && val_id) {
                    // SSLCommerz flow
                    success = await sslcommerzApi.validate(tran_id, val_id);
                    if (success) toast.success('Payment successful via SSLCommerz!');
                    else toast.error('Payment verification failed.');
                } else {
                    toast.error('No payment info provided.');
                    navigate('/cars');
                    return;
                }

                if (success) {
                    timer = setTimeout(() => {
                        navigate('/dashboard/customer/bookings-history', { replace: true });
                    }, 5000);
                }
            } catch (err) {
                toast.error(err.message || 'Payment verification failed');
            } finally {
                setLoading(false);
            }
        };

        verifyPayment();

        return () => clearTimeout(timer);
    }, [sessionId, tran_id, val_id, navigate]);

    if (loading) return <LoadingSpinner minHScreen={'min-h-screen'} />;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-5 text-center">
            <h1 className="text-5xl font-bold text-primary">Payment Successful!</h1>
            <p className="text-lg text-secondary max-w-md">
                Your booking has been confirmed. Thank you for choosing our service!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-5">
                <button
                    onClick={() => navigate('/dashboard/customer/bookings-history')}
                    className="btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1"
                >
                    <span>Go to Bookings</span><MdOutlineArrowOutward />
                </button>

                <button
                    onClick={() => navigate('/cars')}
                    className="btn btn-primary rounded-full btn-outline btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1"
                >
                    <span>Add More Cars</span><MdOutlineArrowOutward />
                </button>
            </div>

            <p className="text-sm text-gray-500 mt-3">
                You will be automatically redirected to your bookings in a few seconds...
            </p>
        </div>
    );
};

export default PaymentSuccessPage;