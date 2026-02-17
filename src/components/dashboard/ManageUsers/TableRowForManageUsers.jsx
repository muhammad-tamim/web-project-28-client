import React, { useState } from 'react';
import useUpdateUser from '../../../hooks/queries/users/useUpdateUser';
import toast from 'react-hot-toast';

const TableRowForManageUsers = ({ user }) => {
    const { mutate: updateUser } = useUpdateUser(user?.email);
    const [selectedValue, setSelectedValue] = useState('');

    const handleActions = (e) => {
        setSelectedValue(e.target.value);
        updateUser({ id: user._id, data: { role: e.target.value } }, {
            onSuccess: () => {
                toast.success("User Role Updated Successfully")
            },
            onError: (err) => toast.error(err.message || 'Update Failed')
        })
    }

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
            <td className='p-3'>{user.wantToSellerRequest ? "true" : "false"}</td>
            <td className='p-3'>
                <select onChange={handleActions} value={selectedValue} className="select select-primary focus:outline-none bg-base-300 w-44">
                    <option value={''} disabled={true}>Select an action</option>
                    <option value={'customer'}>Make Customer</option>
                    <option value={'seller'}>Make Seller</option>
                </select>
            </td>
        </tr>
    );
};

export default TableRowForManageUsers;