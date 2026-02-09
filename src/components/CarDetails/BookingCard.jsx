import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const BookingCard = ({ car, handleBookings }) => {

    const { dailyRentalPrice } = car || {};

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    let days = 0;
    let totalPrice = 0;

    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const diffTime = end - start;
        days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (days > 0) {
            totalPrice = days * dailyRentalPrice;
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
                        <input onChange={(e) => setStartDate(e.target.value)} name="startDate" type="date" className='input w-full input-primary focus:outline-none bg-base-300' />
                    </div>
                    <div className='space-y-2 text-secondary'>
                        <label className="text-sm block text-secondary font-medium">End Date</label>
                        <input onChange={(e) => setEndDate(e.target.value)} name="endDate" type="date" className='input w-full input-primary focus:outline-none bg-base-300' />
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
                        :
                        <p className="text-sm text-secondary">
                            Select valid start and end dates
                        </p>
                    }
                </div>

                <div className='flex justify-center'>
                    <button onClick={handleBookings} type='submit' className={`btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1`} > Book Now <span><MdOutlineArrowOutward /></span></button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;