import React from 'react';
import useDeleteCategory from '../../../hooks/queries/Categories/useDeleteCategory';
import useUpdateCategory from '../../../hooks/queries/Categories/useUpdateCategory';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const TableRowForCategories = ({ category }) => {
    const { mutate: deleteCategory } = useDeleteCategory();
    const { mutate: updateCategory } = useUpdateCategory();

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
                deleteCategory(category._id, {
                    onSuccess: () => toast.success("Brand deleted successfully"),
                    onError: (err) => toast.error(err.message || "Delete failed"),
                });

            }
        });
    };

    const handleFormSubmit = (e) => {

        e.preventDefault()
        const photoUrl = e.target.photoUrl.value;
        const isActive = e.target.isActive.value === "true";


        const payload = {
            photoUrl,
            isActive
        }

        updateCategory({ id: category?._id, data: payload }, {
            onSuccess: () => {
                toast.success("Car updated successfully");
                document.getElementById(category._id).close();
            },
            onError: (err) => toast.error(err.message || "Update failed"),
        })

    }
    return (
        <>
            <tr className="text-secondary">
                <td className="p-3">
                    <div className="w-24 h-16 overflow-hidden rounded-lg">
                        <img
                            src={category?.photoUrl}
                            alt={category?.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </td>

                <td className='p-3'>{category?.name}</td>
                <td className='p-3'>{category?.carCount}</td>
                <td className='p-3'>{category?.isActive ? 'Active' : 'Not Active'}</td>
                <td className='p-3'>
                    <div className="flex gap-2">

                        <button onClick={() => document.getElementById(category._id).showModal()} className={`btn btn-sm btn-primary`}>Update</button>
                        <button onClick={handleDelete} className={`btn btn-sm btn-error ${Number(category.carCount) > 0 && 'btn-disabled'}`}>Delete</button>
                    </div>
                </td>

                <td>
                    <dialog id={category._id} className="modal">
                        <div className="modal-box bg-base-300 rounded-3xl space-y-5">
                            <h3 className="font-bold text-2xl text-center">
                                Update Profile
                            </h3>

                            <form onSubmit={handleFormSubmit} className="space-y-5">


                                <div className='space-y-2 text-secondary'>
                                    <label className="text-sm block text-secondary font-medium">Photo URL</label>
                                    <input name='photoUrl' type="url" defaultValue={category.photoUrl} className='input w-full input-primary focus:outline-none bg-base-300' />
                                </div>

                                <div className='space-y-2 text-secondary'>
                                    <label className="text-sm block text-secondary font-medium">Status</label>
                                    <select name='isActive' defaultValue={category.isActive ? "true" : "false"} className="select w-full select-primary focus:outline-none bg-base-300">
                                        <option disabled={true}>Pick a Status</option>
                                        <option value="true">Active</option>
                                        <option value="false">In-Active</option>
                                    </select>
                                </div>

                                <div className="modal-action flex justify-center gap-3">
                                    <button type="submit" className='btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition'>
                                        Update
                                    </button>
                                    <button type="button" onClick={() => document.getElementById(category._id).close()} className='btn btn-primary btn-outline rounded-full btn-xl hover:-translate-y-1 duration-200 transition'>
                                        Cancel
                                    </button>

                                </div>
                            </form>
                        </div>
                    </dialog>
                </td>
            </tr >
        </>
    );
};

export default TableRowForCategories;