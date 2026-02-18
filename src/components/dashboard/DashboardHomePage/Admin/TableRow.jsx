import { format } from 'date-fns';
import React from 'react';

const TableRow = ({ user }) => {
    return (
        <tr>
            <td className="p-3">
                <div className="w-24 h-16 overflow-hidden rounded-lg">
                    <img
                        src={user.photoUrl}
                        alt={user.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </td>

            <td className='p-3'>{user.name}</td>
            <td className='p-3'>{user.email}</td>
            <td className='p-3'>{user.role}</td>
            <td className='p-3'>{format(new Date(user.createdAt), 'PP, p')}</td>
            <td className='p-3'>{format(new Date(user.lastLogin), 'PP, p')}</td>
        </tr>
    );
};

export default TableRow;