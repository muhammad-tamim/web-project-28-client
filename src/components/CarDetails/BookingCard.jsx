import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router';
import { stripeApi } from '../../api/stripe.api';
import useAuth from '../../hooks/useAuth';

const BookingCard = ({ car }) => {

    const { user } = useAuth()

    const { dailyRentalPrice } = car || {};
    // const navigate = useNavigate()

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


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


        const payload = {
            carId: car._id,
            email: car.email,
            startDate,
            endDate,
            totalCost: totalPrice
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
            try {
                const url = await stripeApi.createSession(payload);
                window.location.href = url;
            } catch (err) {
                toast.error(err.message || 'Payment Failed');
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
                        <input value={startDate} onChange={(e) => setStartDate(e.target.value)} name="startDate" type="date" className='input w-full input-primary focus:outline-none bg-base-300' />
                    </div>
                    <div className='space-y-2 text-secondary'>
                        <label className="text-sm block text-secondary font-medium">End Date</label>
                        <input value={endDate} onChange={(e) => setEndDate(e.target.value)} name="endDate" type="date" className='input w-full input-primary focus:outline-none bg-base-300' />
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
                    <button onClick={handleBookings} type='submit' className={`btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1 ${user?.email === car.email && 'btn-disabled'}`} > Book Now <span><MdOutlineArrowOutward /></span></button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;