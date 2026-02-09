import React, { use } from 'react';
import useGetBrands from '../../hooks/queries/Brands/useGetBrands';
import useGetCategories from '../../hooks/queries/Categories/useGetCategories';
import LoadingSpinner from '../LoadingSpinner';
import { AuthContext } from '../../contexts/AuthContext';
import useCreateCars from '../../hooks/queries/cars/useCreateCars';
import toast from 'react-hot-toast';

const Form = () => {

    const { user } = use(AuthContext)

    const { data: brands, isLoading: brandsLoading, isError: brandsIsError, error: brandsError } = useGetBrands()
    const { data: categories, isLoading: categoriesLoading, isError: categoriesIsError, error: categoriesError } = useGetCategories()
    const { mutate } = useCreateCars()


    if (brandsLoading || categoriesLoading) {
        return <LoadingSpinner minHScreen="min-h-screen" />
    }

    if (brandsIsError || categoriesIsError) {
        return <h2 className="text-red-500 text-center my-20">Error: {brandsError.message || categoriesError.message}</h2>
    }

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
            email: user.email,
        };

        mutate(payload, {
            onSuccess: () => {
                form.reset()
                toast.success('Car added successfully')
            },
            onError: (err) => {
                toast.error(err.response?.data?.message || 'Failed to add car')
            }
        })
    }


    return (
        <form className='space-y-10' onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-6">

                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Name</label>
                    <input name='name' type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Photo URL</label>
                    <input name='photoUrl' type="url" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Model</label>
                    <input name='model' type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Year</label>
                    <input name='year' type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>

                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Brand</label>
                    {brandsIsError && <h2 className="text-red-500">Error: {brandsError.message}</h2>}
                    {!brandsLoading &&
                        <select name="brand" defaultValue="Pick a Brand" className="select w-full select-primary focus:outline-none bg-base-300">
                            <option disabled={true}>Pick a Brand</option>
                            {brands.map(brand =>
                                <option key={brand._id}>{brand.name}</option>
                            )}
                        </select>
                    }
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Category</label>
                    {categoriesIsError && <h2 className="text-red-500">Error: {categoriesError.message}</h2>}
                    {!categoriesLoading &&
                        <select name='category' defaultValue="Pick a Category" className="select w-full select-primary focus:outline-none bg-base-300">
                            <option disabled={true}>Pick a Category</option>
                            {categories.map(category =>
                                <option key={category._id}>{category.name}</option>
                            )}
                        </select>
                    }
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Registration Number</label>
                    <input name='registrationNumber' type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Daily Rental Price($)</label>
                    <input name="dailyRentalPrice" type="number" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>
                <div className='space-y-2 col-span-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Features</label>
                    <textarea name="features" className='textarea w-full input-primary focus:outline-none bg-base-300'></textarea>
                </div>
                <div className='space-y-2 col-span-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Description</label>
                    <textarea name="description" className='textarea w-full input-primary focus:outline-none bg-base-300'></textarea>
                </div>

            </div>

            <div className='flex justify-center'>
                <button type='submit' className='btn btn-primary rounded-full btn-xl text-black/80 px-12 font-normal hover:-translate-y-1 duration-200 transition'>Submit</button>
            </div>

        </form >
    );
};

export default Form;