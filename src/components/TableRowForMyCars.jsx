import useDeleteCar from '../hooks/queries/cars/useDeleteCar';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const TableRowForMyCars = ({ car }) => {
    const { mutate: deleteBooking } = useDeleteCar();


    const handleDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,

            buttonsStyling: false,

            confirmButtonText: "Yes, Delete it",
            cancelButtonText: "Cancel",

            customClass: {
                confirmButton: "btn btn-primary mx-5 btn-lg rounded-full px-10",
                cancelButton: "btn btn-outline btn-primary btn-lg rounded-full px-10",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                deleteBooking(car._id, {
                    onSuccess: () => toast.success("Booking deleted successfully"),
                    onError: (err) => toast.error(err.message || "Delete failed"),
                });

            }
        });
    };

    return (
        <>
            <tr className="text-secondary">
                <td className="p-3">
                    <div className="w-24 h-16 overflow-hidden rounded-lg">
                        <img
                            src={car.photoUrl}
                            alt={car.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </td>

                <td className='p-3'>{car.name}</td>
                <td className='p-3'>{car.brand}</td>
                <td className='p-3'>{car.registrationNumber}</td>
                <td className='p-3'>{car.bookingCount}</td>
                <td className='p-3'>{car.bookingStatus ? "Booked" : 'Not Booked'}</td>
                <td className='p-3'>
                    <div className="flex gap-2">

                        <Link to={`/dashboard/seller/update-car/${car._id}`} className={`btn btn-sm btn-primary ${car.bookingStatus && 'btn-disabled'}`}>Update</Link>
                        <Link to={`/car-details/${car._id}`}><button className="btn btn-sm btn-primary">Details</button></Link>
                        <button onClick={handleDelete} className={`btn btn-sm btn-error ${car.bookingStatus && 'btn-disabled'}`}>Delete</button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default TableRowForMyCars;