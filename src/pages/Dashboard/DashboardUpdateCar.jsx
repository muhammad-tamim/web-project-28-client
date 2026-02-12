import React from 'react';
import { useNavigate, useParams } from 'react-router';
import useGetBrands from '../../hooks/queries/Brands/useGetBrands';
import useGetCategories from '../../hooks/queries/Categories/useGetCategories';
import MaxWidth from '../../components/MaxWidth';
import PagesBanner from '../../components/layouts/PagesBanner';
import useGetCar from '../../hooks/queries/cars/useGetCar';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import useUpdateCar from '../../hooks/queries/cars/useUpdateCar';

const DashboardUpdateCar = () => {

    const navigate = useNavigate();

    const { id } = useParams()

    const { data: brands } = useGetBrands()
    const { data: categories } = useGetCategories()
    const { data: car } = useGetCar(id);
    const { mutate: updateCar } = useUpdateCar();

    const { name, model, year, brand, category, description, dailyRentalPrice,
        registrationNumber, features, photoUrl } = car || {}

    const handleFormSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const rawData = Object.fromEntries(formData.entries())

        const payload = {
            name: rawData.name,
            model: rawData.model,
            year: Number(rawData.year),
            brand: rawData.brand,
            category: rawData.category,
            description: rawData.description,
            dailyRentalPrice: Number(rawData.dailyRentalPrice),
            registrationNumber: rawData.registrationNumber,
            features: rawData.features,
            photoUrl: rawData.photoUrl,
        };


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
                updateCar({ id, data: payload }, {
                    onSuccess: () => {
                        toast.success("Car updated successfully");
                        navigate("/dashboard/seller/my-cars")

                    },
                    onError: (err) => toast.error(err.message || "Update failed"),
                })

            }
        });

    }

    const handleCancel = () => {
        navigate("/dashboard/seller/my-cars")
    }
    return (
        <div>
            {/* <PagesBanner pageName={'rentax'} title={'Update Car'}></PagesBanner> */}
            <MaxWidth>
                <div className='space-y-20 my-20 xl:px-10'>
                    <form className='space-y-10' onSubmit={handleFormSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">

                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Name</label>
                                <input name='name' defaultValue={name} type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                            </div>
                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Photo URL</label>
                                <input name='photoUrl' defaultValue={photoUrl} type="url" className='input w-full input-primary focus:outline-none bg-base-300' />
                            </div>
                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Model</label>
                                <input name='model' defaultValue={model} type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                            </div>
                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Year</label>
                                <input name='year' defaultValue={year} type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                            </div>

                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Brand</label>
                                <select name="brand" defaultValue={brand} className="select w-full select-primary focus:outline-none bg-base-300">
                                    <option disabled={true}>Pick a Brand</option>
                                    {brands?.map(brand =>
                                        <option key={brand._id}>{brand.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Category</label>
                                <select name='category' defaultValue={category} className="select w-full select-primary focus:outline-none bg-base-300">
                                    <option disabled={true}>Pick a Category</option>
                                    {categories?.map(category =>
                                        <option key={category._id}>{category.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Registration Number</label>
                                <input name='registrationNumber' defaultValue={registrationNumber} type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                            </div>
                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Daily Rental Price($)</label>
                                <input name="dailyRentalPrice" defaultValue={dailyRentalPrice} type="number" className='input w-full input-primary focus:outline-none bg-base-300' />
                            </div>
                            <div className='space-y-2 col-span-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Features</label>
                                <textarea name="features" defaultValue={features} className='textarea w-full input-primary focus:outline-none bg-base-300'></textarea>
                            </div>
                            <div className='space-y-2 col-span-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Description</label>
                                <textarea name="description" defaultValue={description} className='textarea w-full input-primary focus:outline-none bg-base-300'></textarea>
                            </div>

                        </div>

                        <div className='flex justify-center gap-2'>
                            <button type='submit' className='btn btn-primary rounded-full btn-xl text-black/80 px-12 font-normal hover:-translate-y-1 duration-200 transition'>Update</button>
                            <button type='button' onClick={handleCancel} className='btn btn-primary btn-outline rounded-full btn-xl text-black/80 px-12 font-normal hover:-translate-y-1 duration-200 transition'>Cancel</button>
                        </div>

                    </form >
                </div>
            </MaxWidth>
        </div>
    );
};

export default DashboardUpdateCar;