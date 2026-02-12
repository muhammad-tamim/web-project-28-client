import { format } from 'date-fns';
import React, { useState } from 'react';
import useDeleteBooking from '../hooks/queries/bookings/useDeleteBooking';
import toast from 'react-hot-toast';
import useUpdateBooking from '../hooks/queries/bookings/useUpdateBooking';
import Swal from 'sweetalert2';

const TableRow3 = ({ booking }) => {
    const { mutate: deleteBooking } = useDeleteBooking();
    const { mutate: updateBooking } = useUpdateBooking();

    const [startDate, setStartDate] = useState(booking.startDate?.split('T')[0] || '');
    const [endDate, setEndDate] = useState(booking.endDate?.split('T')[0] || '');

    const handleDelete = () => {
        deleteBooking(booking._id, {
            onSuccess: () => toast.success("Booking deleted successfully"),
            onError: (err) => toast.error(err.message || "Delete failed"),
        });
    };

    let days = 0;
    let totalPrice = 0;

    if (startDate && endDate) {
        const start = new Date(startDate)
        const end = new Date(endDate)

        if (end <= start) {
            days = 0
        }
        else {
            const diffTime = end - start;
            days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        }
        totalPrice = days > 0 ? days * booking.car.dailyRentalPrice : 0
    }

    const handleUpdate = () => {

        if (!startDate || !endDate) {
            return toast.error("Please select dates");
        }

        const payload = {
            startDate,
            endDate
        }
        const id = booking._id

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,

            buttonsStyling: false,

            confirmButtonText: "Yes, Update it",
            cancelButtonText: "Cancel",

            customClass: {
                confirmButton: "btn btn-primary mx-5 btn-lg rounded-full px-10",
                cancelButton: "btn btn-outline btn-primary btn-lg rounded-full px-10",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                updateBooking({ id, data: payload }, {
                    onSuccess: () => {
                        toast.success("Booking updated successfully");
                        document.getElementById(`modal-${booking._id}`)?.close();
                    },
                    onError: (err) => toast.error(err.message || "Update failed"),
                })

            }
        });

    }

    return (
        <>
            <tr className="text-secondary">
                <td className="p-3">
                    <div className="w-24 h-16 overflow-hidden rounded-lg">
                        <img
                            src={booking.car.photoUrl}
                            alt={booking.car.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </td>

                <td className='p-3'>{booking.car.name}</td>


                <td className='p-3'>
                    {format(new Date(booking.startDate), "PP")}
                </td>

                <td className='p-3'>
                    {format(new Date(booking.endDate), "PP")}
                </td>

                <td className='p-3'>{booking.car.bookingStatus ? "Booked" : 'Not Booked'}</td>

                <td className='p-3'>${booking.totalCost}</td>

                <td className='p-3'>
                    <div className="flex gap-2">

                        <button onClick={() => {
                            document.getElementById(`modal-${booking._id}`)?.showModal();
                        }} className="btn btn-sm btn-primary">Update</button>
                        <button onClick={handleDelete} className="btn btn-sm btn-primary btn-outline">Cancel</button>
                    </div>
                </td>

                <td>
                    <dialog id={`modal-${booking._id}`} className="modal">
                        <div className="modal-box">
                            <div className='bg-base-300 rounded-3xl'>
                                <div className='text-center bg-primary py-10 rounded-b-none rounded-3xl'>
                                    <p><span className='font-bold text-4xl'>${booking.car.dailyRentalPrice}</span> <span className='text-secondary text-sm'>/ rent per day</span></p>
                                </div>
                                <div className='p-5 lg:p-10 space-y-10'>
                                    <div className='space-y-5'>
                                        <div className='space-y-2 text-secondary'>
                                            <label className="text-sm block text-secondary font-medium">Start Date</label>
                                            <input value={startDate} onChange={(e) => setStartDate(e.target.value)} name="startDate" type="date" className='input w-full input-primary focus:outline-none bg-base-300' />
                                        </div>
                                        <div className='space-y-2 text-secondary'>
                                            <label className="text-sm block text-secondary font-medium">End Date</label>
                                            <input value={endDate} onChange={(e) => setEndDate(e.target.value)} name="endDate" type="date" className='input w-full input-primary focus:outline-none bg-base-300' />
                                        </div>
                                    </div>

                                    <div className="bg-base-200 rounded-3xl p-4 text-center">
                                        {days > 0 ?
                                            <>
                                                <p className="text-sm text-secondary">
                                                    {days} day{days > 1 ? 's' : ''}
                                                </p>
                                                <p className="text-2xl font-bold text-primary">
                                                    Total: ${totalPrice}
                                                </p>
                                            </>
                                            : startDate && endDate ?
                                                <p className="text-sm text-red-500">
                                                    End date must be after start date
                                                </p>
                                                :
                                                <p className="text-sm text-secondary">
                                                    Select valid start and end dates
                                                </p>
                                        }
                                    </div>

                                    <div className='flex justify-center'>
                                        <form method="dialog" className='flex gap-3'>
                                            <button onClick={handleUpdate} className='btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition' >Update</button>
                                            <button onClick={() => document.getElementById(`modal-${booking._id}`).close()} className='btn btn-primary btn-outline rounded-full btn-xl hover:-translate-y-1 duration-200 transition' >Close</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </td>
            </tr>


        </>
    );
};

export default TableRow3;