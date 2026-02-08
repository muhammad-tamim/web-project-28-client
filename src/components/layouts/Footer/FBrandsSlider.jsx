import React from 'react';
import Swiper2 from '../../Swiper/Swiper2';
import LoadingSpinner from '../../LoadingSpinner';
import { SwiperSlide } from 'swiper/react';
import useGetBrands from '../../../hooks/queries/Brands/useGetBrands';

const FBrandsSlider = () => {

    const { data: brands, isLoading, isError, error } = useGetBrands()

    if (isLoading) {
        return <LoadingSpinner marginY={5}></LoadingSpinner>
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-5">Error: {error.message}</h2>
    }

    return (
        <div>
            <Swiper2>
                {brands.map(brand =>
                    <SwiperSlide key={brand._id}><img src={brand.photoUrl} alt={brand.name} className='h-20 md:h-24 xl:h-30 w-full object-center my-5 p-5' /></SwiperSlide>
                )}
            </Swiper2>
        </div>
    );
};

export default FBrandsSlider;