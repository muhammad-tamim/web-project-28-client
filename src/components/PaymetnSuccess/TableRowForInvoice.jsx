import { differenceInCalendarDays, format } from 'date-fns';
import React from 'react';

const TableRowForInvoice = ({ booking }) => {
    const { car, payment, startDate, endDate, totalCost } = booking;
    const rentalDurationInDays = differenceInCalendarDays(new Date(endDate), new Date(startDate));
    return (
        <tr>
            <td>{car.name}</td>
            <td>
                {format(new Date(startDate), 'PP')} | {format(new Date(startDate), 'PP')}
            </td>
            <td>{rentalDurationInDays} Days</td>
            <td>{car.dailyRentalPrice} {payment.currency}</td>
            <td>{totalCost} {payment.currency}</td>
            <td>{payment.paymentMethod}</td>
        </tr>
    );
};

export default TableRowForInvoice;