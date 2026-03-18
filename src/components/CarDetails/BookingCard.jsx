import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useGetUser from '../../hooks/queries/users/useGetUser';
import LoadingSpinner from '../LoadingSpinner';
import useCreateBookings from '../../hooks/queries/bookings/useCreateBookings';

const BookingCard = ({ car }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const { mutateAsync } = useCreateBookings();

    const [loading, setLoading] = useState(false);

    const { user } = useAuth();
    const { data: userInfo, isLoading, isError, error } = useGetUser(user?.email);
    const navigate = useNavigate();

    if (isLoading) return <LoadingSpinner minHScreen="min-h-screen" />;
    if (isError) return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>;

    const { dailyRentalPrice, bookingStatus, availability } = car || {};

    let days = 0;
    let totalPrice = 0;

    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (end > start) {
            const diffTime = end - start;
            days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }
        totalPrice = days > 0 ? days * dailyRentalPrice : 0;
    }

    const handleBookings = async () => {
        if (!startDate || !endDate) return toast.error('Please select dates');
        if (days <= 0) return toast.error('Invalid dates');

        const result = await Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonText: 'Yes, Book it',
            cancelButtonText: 'Cancel',
            customClass: {
                confirmButton: 'btn btn-primary mx-5 btn-lg rounded-full px-10',
                cancelButton: 'btn btn-outline btn-primary btn-lg rounded-full px-10',
            },
        });

        if (result.isConfirmed) {
            setLoading(true);
            try {
                // 🔹 Demo payment object
                const demoTranId = 'DEMO-' + Date.now();

                const payload = {
                    tran_id: demoTranId,
                    carId: car._id,
                    cus_name: userInfo.name,
                    cus_email: userInfo.email,
                    cus_photoUrl: userInfo.photoUrl,
                    total_amount: totalPrice,
                    currency: 'USD',
                    startDate,
                    endDate,
                };

                try {
                    await mutateAsync(payload); // wait for API to succeed
                    navigate(`/payment-success?tran_id=${demoTranId}`, { replace: true });
                } catch (err) {
                    toast.error(err.message || 'Booking failed');
                }
                finally {
                    setLoading(false);
                }

            } catch (err) {
                toast.error(err.message || 'Booking failed');
            }
        }
    };

    // if (loading) return <LoadingSpinner minHScreen="min-h-screen" />;

    return (
        <div className="bg-base-300 rounded-3xl">
            <div className="text-center bg-primary py-10 rounded-b-none rounded-3xl">
                <p>
                    <span className="font-bold text-4xl">${dailyRentalPrice}</span>{' '}
                    <span className="text-secondary text-sm">/ rent per day</span>
                </p>
            </div>
            <div className="p-5 lg:p-10 space-y-10">
                <div className="space-y-5">
                    <div className="space-y-2 text-secondary">
                        <label className="text-sm block text-secondary font-medium">Start Date</label>
                        <input
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            type="date"
                            className="input w-full input-primary focus:outline-none bg-base-300"
                            required
                        />
                    </div>
                    <div className="space-y-2 text-secondary">
                        <label className="text-sm block text-secondary font-medium">End Date</label>
                        <input
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            type="date"
                            className="input w-full input-primary focus:outline-none bg-base-300"
                            required
                        />
                    </div>
                </div>

                <div className="bg-base-200 rounded-3xl p-4 text-center">
                    {days > 0 ? (
                        <>
                            <p className="text-sm text-secondary">{days} day{days > 1 ? 's' : ''}</p>
                            <p className="text-2xl font-bold text-primary">Total: ${totalPrice}</p>
                        </>
                    ) : startDate && endDate ? (
                        <p className="text-sm text-red-500">End date must be after start date</p>
                    ) : (
                        <p className="text-sm text-secondary">Select valid start and end dates</p>
                    )}
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleBookings}
                        type="submit"
                        className={`btn btn-primary rounded-full btn-xl hover:-translate- y-1 duration - 200 transition flex items - center gap - 1 ${user?.email === car.email || bookingStatus || !availability || startDate === '' || endDate === ''
                            ? 'btn-disabled'
                            : ''
                            }`}
                    >
                        {/* Book Now <MdOutlineArrowOutward /> */}
                        {loading ? (
                            <>
                                <span className={`loading loading-spinner loading-lg`}></span>
                                <span>Booking...</span>
                            </>
                        ) : (
                            <>
                                Book Now <MdOutlineArrowOutward />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;