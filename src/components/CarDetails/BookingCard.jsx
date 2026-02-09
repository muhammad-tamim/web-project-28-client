import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const BookingCard = ({ car }) => {

    const { dailyRentalPrice } = car || {};

    return (
        <div className='bg-base-300 rounded-3xl'>
            <div className='text-center bg-primary py-10 rounded-b-none rounded-3xl'>
                <p><span className='font-bold text-4xl'>${dailyRentalPrice}</span> <span className='text-secondary text-sm'>/ rent per day</span></p>
            </div>
            <div className='p-5 lg:p-10 space-y-10'>
                <div className='space-y-5'>
                    <div className='space-y-2 text-secondary'>
                        <label className="text-sm block text-secondary font-medium">Start Date</label>
                        <input name="startDate" type="date" className='input w-full input-primary focus:outline-none bg-base-300' />
                    </div>
                    <div className='space-y-2 text-secondary'>
                        <label className="text-sm block text-secondary font-medium">End Date</label>
                        <input name="endDate" type="date" className='input w-full input-primary focus:outline-none bg-base-300' />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className={`btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1`} > Book Now <span><MdOutlineArrowOutward /></span></button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;