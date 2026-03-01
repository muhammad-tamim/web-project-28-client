import { format } from 'date-fns';
import React from 'react';

const MySalesTableRow = ({ booking }) => {
    console.log(booking)
    console.log("createdAt:", booking?.car?.createdAt)
    return (
        <tr className="text-secondary">
            <td className="p-3">
                <div className="w-24 h-16 overflow-hidden rounded-lg">
                    <img
                        src={booking?.car.photoUrl}
                        alt={booking?.car.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </td>

            <td className='p-3'>{booking?.car.name}</td>
            <td className='p-3'>{booking?.payment.tran_id}</td>
            <td className='p-3'>{format(new Date(booking.car.createdAt), "yyyy-MM-dd")}</td>
            <td className='p-3'>{booking?.email}</td>
            <td className='p-3'>${booking?.totalCost}</td>
        </tr>
    );
};

export default MySalesTableRow;