import React from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { IoMdMail } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';

const FContact = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-md bg-base-200 py-5 px-5 lg:px-10 shadow-lg">

            <div className="flex gap-3 items-center">
                <button className="btn btn-xl btn-primary btn-circle">
                    <LuPhoneCall />
                </button>
                <div>
                    <p className="font-bold">Call us</p>
                    <p className="text-sm">+971 52-333-4444</p>
                </div>
            </div>

            <div className="flex gap-3 items-center">
                <button className="btn btn-xl btn-primary btn-circle">
                    <IoMdMail />
                </button>
                <div>
                    <p className="font-bold">Write to us</p>
                    <p className="text-sm">info@renax.com</p>
                </div>
            </div>

            <div className="flex gap-3 items-center">
                <button className="btn btn-xl btn-primary btn-circle">
                    <CiLocationOn />
                </button>
                <div>
                    <p className="font-bold">Address</p>
                    <p className="text-sm">Dubai, Renax city, Office 123</p>
                </div>
            </div>

        </div>
    );
};

export default FContact;