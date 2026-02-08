import React from 'react';
import Swiper1 from '../../Swiper/Swiper1';
import Card1 from '../../Cards/Card1';
import useGetTypes from '../../../hooks/queries/types/useGetTypes';
import LoadingSpinner from '../../LoadingSpinner';
import { SwiperSlide } from 'swiper/react';

const CarTypes = () => {

    const { data: types, isLoading, isError, error } = useGetTypes()

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
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Rental <span className='text-primary'>Car Types</span></h1>
            </div>

            <Swiper1>
                {types.map(type => (
                    <SwiperSlide key={type._id}>
                        <Card1 image={type.photoUrl} title={type.name} where={`/categories/types-details/${type.name}`}></Card1>
                    </SwiperSlide>
                ))}
            </Swiper1>

        </div>
    );
};

export default CarTypes;