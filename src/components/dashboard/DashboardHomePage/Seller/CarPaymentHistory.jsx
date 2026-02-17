import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const CarPaymentHistory = ({ bookings }) => {
    const uniqueCars = [...new Set(bookings.map(booking => booking.car.name))];

    const carRevenueArray = uniqueCars.map(uniqueCar => ({ uniqueCar, totalAmount: 0 }));


    bookings.forEach(booking => {
        const foundCar = carRevenueArray.find(car => car.uniqueCar === booking.car.name)
        if (foundCar) {
            foundCar.totalAmount += booking.payment.amount
        }
    });


    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary">Revenue by Vehicle</h2>
                <p className="text-sm text-secondary mt-1">A summary of total earnings generated from each car.</p>
            </div>

            <AreaChart
                style={{ width: '100%', maxHeight: '30vh', aspectRatio: 1.618 }}
                responsive
                data={carRevenueArray}
                syncId="anyId"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="uniqueCar" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="totalAmount" stroke="#f5b754" fill="#f5b754" />
            </AreaChart>
        </div>
    );
};

export default CarPaymentHistory;