import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router';
import { stripeApi } from '../../api/stripe.api';
import useAuth from '../../hooks/useAuth';
import useGetUser from '../../hooks/queries/users/useGetUser';
import LoadingSpinner from '../LoadingSpinner';
import { sslcommerzApi } from '../../api/sslcommerz.api';

const BookingCard = ({ car }) => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('')

    const { user } = useAuth()
    const { data: userInfo, isLoading, isError, error } = useGetUser(user?.email)

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }


    const { dailyRentalPrice, bookingStatus, availability } = car || {};




    let days = 0;
    let totalPrice = 0;

    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);


        if (end <= start) {
            days = 0
        }
        else {
            const diffTime = end - start;
            days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }

        totalPrice = days > 0 ? days * dailyRentalPrice : 0;
    }

    const handleBookings = async () => {

        if (!startDate || !endDate) {
            return toast.error("Please select dates");
        }

        if (days <= 0) {
            return toast.error("Invalid dates");
        }


        const result = await Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,

            buttonsStyling: false,

            confirmButtonText: "Yes, Book it",
            cancelButtonText: "Cancel",

            customClass: {
                confirmButton: "btn btn-primary mx-5 btn-lg rounded-full px-10",
                cancelButton: "btn btn-outline btn-primary btn-lg rounded-full px-10",
            },
        })


        if (result.isConfirmed) {
            if (paymentMethod === 'stripe') {
                try {
                    const payload = {
                        carId: car._id,
                        product_name: car.name,
                        cus_name: userInfo.name,
                        cus_email: userInfo.email,
                        cus_photoUrl: userInfo.photoUrl,
                        cus_add1: "123 Test Street",
                        cus_city: "Dhaka",
                        cus_postcode: "1200",
                        cus_country: "Bangladesh",
                        cus_phone: "01712345678",
                        startDate,
                        endDate,
                    }

                    const { gatewayURL } = await stripeApi.createSession(payload);
                    window.location.href = gatewayURL;
                } catch (err) {
                    toast.error(err.message || 'Payment Failed');
                }
            }
            else if (paymentMethod === 'sslcommerz') {
                try {
                    const payload = {
                        carId: car._id,
                        product_name: car.name,

                        cus_name: userInfo.name,
                        cus_email: userInfo.email,
                        cus_photoUrl: userInfo.photoUrl,
                        cus_add1: "123 Test Street",
                        cus_city: "Dhaka",
                        cus_postcode: "1200",
                        cus_country: "Bangladesh",
                        cus_phone: "01712345678",

                        startDate,
                        endDate,
                    };

                    const gatewayURL = await sslcommerzApi.init(payload);

                    window.location.href = gatewayURL;
                } catch (err) {
                    toast.error(err.message || "Payment initialization failed");
                }
            }
        }

    }


    return (
        <div className='bg-base-300 rounded-3xl'>
            <div className='text-center bg-primary py-10 rounded-b-none rounded-3xl'>
                <p><span className='font-bold text-4xl'>${dailyRentalPrice}</span> <span className='text-secondary text-sm'>/ rent per day</span></p>
            </div>
            <div className='p-5 lg:p-10 space-y-10'>
                <div className='space-y-5'>
                    <div className='space-y-2 text-secondary'>
                        <label className="text-sm block text-secondary font-medium">Start Date</label>
                        <input value={startDate} onChange={(e) => setStartDate(e.target.value)} name="startDate" type="date" className='input w-full input-primary focus:outline-none bg-base-300' required />
                    </div>
                    <div className='space-y-2 text-secondary'>
                        <label className="text-sm block text-secondary font-medium">End Date</label>
                        <input value={endDate} onChange={(e) => setEndDate(e.target.value)} name="endDate" type="date" className='input w-full input-primary focus:outline-none bg-base-300' required />
                    </div>
                    <div className='space-y-2 text-secondary'>
                        <label className="text-sm block text-secondary font-medium">Payment Method</label>
                        <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod} className="select w-full select-primary focus:outline-none bg-base-300" required>
                            <option value={''} disabled={true}>Pick a Payment Method</option>
                            <option value={'stripe'}>Stripe</option>
                            <option value={'sslcommerz'}>SSLCOMMERZ</option>
                        </select>
                    </div>
                </div>

                <div className="bg-base-200 rounded-3xl p-4 text-center">
                    {days > 0 ?
                        <>
                            <p className="text-sm text-secondary">
                                {days} day{days > 1 ? 's' : ''}
                            </p>
                            <p className="text-2xl font-bold text-primary">
                                Total: ${totalPrice}
                            </p>
                        </>
                        : startDate && endDate ?
                            <p className="text-sm text-red-500">
                                End date must be after start date
                            </p>
                            :
                            <p className="text-sm text-secondary">
                                Select valid start and end dates
                            </p>
                    }
                </div>

                <div className='flex justify-center'>
                    <button onClick={handleBookings} type='submit' className={`btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1 ${(user?.email === car.email || bookingStatus || !availability || paymentMethod === '' || startDate === '' || endDate === '') && 'btn-disabled'}`}>Book Now <span><MdOutlineArrowOutward /></span></button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;