import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const WhyBookCard = () => {
    return (
        <div className="bg-base-300 rounded-3xl p-8 space-y-6">
            <h3 className="text-2xl font-bold">Why Book With Renax?</h3>

            <ul className="space-y-4 text-secondary">
                <li className="flex items-center gap-3">
                    <span className="text-primary text-2xl"><IoIosCheckmarkCircleOutline /></span>
                    <span>Verified & well-maintained vehicles</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-primary text-2xl"><IoIosCheckmarkCircleOutline /></span>
                    <span>No hidden charges or surprise fees</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-primary text-2xl"><IoIosCheckmarkCircleOutline /></span>
                    <span>Flexible booking & easy cancellation</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-primary text-2xl"><IoIosCheckmarkCircleOutline /></span>
                    <span>24/7 customer support</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-primary text-2xl"><IoIosCheckmarkCircleOutline /></span>
                    <span>Trusted by thousands of customers</span>
                </li>
            </ul>
        </div>
    );
};

export default WhyBookCard;
