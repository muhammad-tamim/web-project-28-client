import React, { useState } from 'react';
import useCreateCategory from '../../hooks/queries/Categories/useCreateCategory';
import useGetCategories from '../../hooks/queries/Categories/useGetCategories';
import LoadingSpinner from '../../components/LoadingSpinner';
import toast from 'react-hot-toast';
import MaxWidth from '../../components/MaxWidth';
import TableRowForCategories from '../../components/dashboard/ManageCategories/TableRowForCategories';
import { imageUpload } from '../../api/utils';

const ManageCategories = () => {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const { mutate: createCategory } = useCreateCategory()

    const { data: categories, isLoading, error, isError } = useGetCategories()

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    // searching
    const filteredCategories = (categories || []).filter((brand) =>
        brand.name.toLowerCase().includes(search.toLowerCase())
    );

    // sorting
    const sortedCategories = [...filteredCategories].sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.createdAt) - new Date(a.createdAt)
        }
        if (sortBy === 'oldest') {
            return new Date(a.createdAt) - new Date(b.createdAt)
        }
        return 0
    })

    const handleFormSubmit = async e => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.files[0]
        const photoUrl = await imageUpload(image)

        const payload = { name, photoUrl }

        createCategory(payload, {
            onSuccess: () => {
                e.target.reset()
                toast.success('Car added successfully')
                document.getElementById('add-modal').close()
            },
            onError: (err) => {
                toast.error(err.response?.data?.message || 'Failed to add car')
            }
        })

    }
    console.log(categories)
    return (
        <div>
            <MaxWidth>
                <div className='space-y-20 my-20 xl:px-10'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mb-8'>
                        <input type='text' value={search} placeholder='Search...' className='input w-full lg:max-w-sm input-primary focus:outline-none bg-base-300 '
                            onChange={(e) => setSearch(e.target.value)} />

                        <div className='flex gap-4'>
                            <select className='select select-primary focus:outline-none bg-base-300'
                                onChange={(e) => setSortBy(e.target.value)} >
                                <option value='newest'>Newest First</option>
                                <option value='oldest'>Oldest First</option>
                            </select>

                            <button onClick={() => document.getElementById('add-modal').showModal()} className='btn btn-primary'>Add Category</button>
                        </div>
                    </div>


                    <p className="text-sm text-secondary italic text-center mb-2 lg:hidden">
                        Scroll left/right to view the full table:
                    </p>

                    <div className="overflow-x-auto w-full rounded-xl">
                        <div className="overflow-x-auto w-full rounded-xl">
                            <table className="table w-full bg-base-300">
                                <thead>
                                    <tr>
                                        <th className="p-3 text-left">Image</th>
                                        <th className="p-3 text-left">Brand Name</th>
                                        <th className="p-3 text-left">Car Count</th>
                                        <th className="p-3 text-left">Status</th>
                                        <th className="p-3 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedCategories.length > 0 ? (
                                        sortedCategories.map((category) => (
                                            <TableRowForCategories key={category._id} category={category} />
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center py-8 text-gray-500">
                                                No Brands found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <dialog id='add-modal' className="modal">
                        <div className="modal-box bg-base-300 rounded-3xl space-y-5">
                            <h3 className="font-bold text-2xl text-center">Add Category</h3>

                            <form onSubmit={handleFormSubmit} className="space-y-5">

                                <div className='space-y-2 text-secondary'>
                                    <label className="text-sm block text-secondary font-medium">Category Name</label>
                                    <input name='name' type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                                </div>

                                <div className='space-y-2 text-secondary'>
                                    <label className="text-sm block text-secondary font-medium">Photo</label>
                                    <input name='image' type="file" className='file-input file-input-primary  w-full focus:outline-none bg-base-300' />
                                </div>

                                <div className="modal-action flex justify-center gap-3">
                                    <button type="submit" className='btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition'>
                                        Add
                                    </button>
                                    <button type="button" onClick={() => document.getElementById('add-modal').close()} className='btn btn-primary btn-outline rounded-full btn-xl hover:-translate-y-1 duration-200 transition'>
                                        Cancel
                                    </button>

                                </div>
                            </form>
                        </div>
                    </dialog>

                </div>
            </MaxWidth>
        </div >
    );
};

export default ManageCategories;