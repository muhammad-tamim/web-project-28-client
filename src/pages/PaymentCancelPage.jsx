import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';

const PaymentCancelPage = () => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-5">
            <h1 className="text-4xl font-bold text-red-600">Payment Cancelled</h1>
            <p>Your payment was not completed. You can try again.</p>
            <Link to={'/cars'}><button className="btn btn-primary rounded-full btn-outline btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1"><span>Book again</span><MdOutlineArrowOutward /></button></Link>
        </div>
    );
};

export default PaymentCancelPage;
