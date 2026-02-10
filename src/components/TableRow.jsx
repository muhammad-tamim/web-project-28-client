import React from 'react';
import { Link } from 'react-router';

const TableRow = ({ car }) => {
    return (
        <tr className="text-secondary">
            <td className="p-3">
                <div className="w-24 h-16 overflow-hidden rounded-lg">
                    <img src={car.photoUrl} alt={car.name} className="w-full h-full object-cover" />
                </div>
            </td>
            <td className="p-2">{car.name}</td>
            <td className="p-2">{car.description.length >= 20 ? car.description.slice(0, 20) + '...' : car.description}</td>
            <td className="p-2">${car.dailyRentalPrice}</td>
            <td className="p-2">
                <Link to={`/car-details/${car._id}`} className="btn btn-sm btn-primary">Book Now</Link>
            </td>
        </tr>
    );
};

export default TableRow;