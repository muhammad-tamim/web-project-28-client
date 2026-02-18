import { format } from 'date-fns';
import React from 'react';

const TableRowForSalesReport = ({ booking }) => {
    return (
        <tr>
            <td className="p-3">
                <div className="w-24 h-16 overflow-hidden rounded-lg">
                    <img src={booking.car.photoUrl} alt={booking.car.name} className="w-full h-full object-cover" />
                </div>
            </td>
            <td className='p-3'>{booking.car.name}</td>
            <td className='p-3'>{booking.car.email}</td>
            <td className='p-3'>{booking.email}</td>
            <td className='p-3'>{format(new Date(booking.payment.paidAt), 'PP, p')}</td>
            <td className='p-3'>{booking.payment.paymentIntentId}</td>
            <td className='p-3'>${booking.payment.amount}</td>
        </tr>
    );
};

export default TableRowForSalesReport;