import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const SalesHistoryByMonth = ({ bookings }) => {
    const currentYear = new Date().getFullYear();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    const monthlyDataObj = months.map(month => ({ month, totalBookings: 0, }));

    bookings.forEach(booking => {
        const date = new Date(booking.payment.paidAt);

        if (date.getFullYear() !== currentYear) return;

        const monthIndex = date.getMonth();

        monthlyDataObj[monthIndex].totalBookings++;
    });
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary">
                    {currentYear} Sales Overview
                </h2>
                <p className="text-sm text-secondary mt-1">
                    A monthly breakdown of your sales for the year.
                </p>
            </div>
            <AreaChart
                style={{ width: '100%', maxHeight: '30vh', aspectRatio: 1.618 }}
                responsive
                data={monthlyDataObj}
                syncId="anyId"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="totalBookings" stroke="#f5b754" fill="#f5b754" />
            </AreaChart>
        </div>
    );
};

export default SalesHistoryByMonth;