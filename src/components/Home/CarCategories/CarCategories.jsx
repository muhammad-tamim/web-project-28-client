import React from 'react';
import Swiper1 from '../../Swiper/Swiper1';
import Card1 from '../../Cards/Card1';
import LoadingSpinner from '../../LoadingSpinner';
import { SwiperSlide } from 'swiper/react';
import useGetCategories from '../../../hooks/queries/Categories/useGetCategories';

const CarCategories = () => {

    const { data: categories, isLoading, isError, error } = useGetCategories()

    if (isLoading) {
        return <LoadingSpinner marginY={'20'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    return (
        <div>
            <div className='flex justify-center mb-10'>
                <div className='border h-14 border-primary w-0'></div>
            </div>

            <div className='text-center space-y-3 mb-10'>
                <p className='text-primary text-[11px] tracking-[5px]'>CATEGORIES</p>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Rental <span className='text-primary'>Car Categories</span></h1>
            </div>

            <Swiper1>
                {categories.map(category => (
                    <SwiperSlide key={category._id}>
                        <Card1 image={category.photoUrl} title={category.name} where={`/categories/category-details/${category.name}`}></Card1>
                    </SwiperSlide>
                ))}
            </Swiper1>

        </div>
    );
};

export default CarCategories;