import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import brand1 from '../../../assets/images/brands/brand1.png'
import brand2 from '../../../assets/images/brands/brand2.png'
import brand3 from '../../../assets/images/brands/brand3.png'
import brand4 from '../../../assets/images/brands/brand4.png'
import brand5 from '../../../assets/images/brands/brand5.png'
import brand6 from '../../../assets/images/brands/brand6.png'
import brand7 from '../../../assets/images/brands/brand7.png'
import brand8 from '../../../assets/images/brands/brand8.png'
import "swiper/css";

const FBrandsSlider = () => {
    return (
        <div>
            {/* for small screens */}
            <div className='md:hidden'>
                <Swiper slidesPerView={2} loop={true} modules={[Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }}>
                    <SwiperSlide><img src={brand1} alt="brand1" /></SwiperSlide>
                    <SwiperSlide><img src={brand2} alt="brand2" /></SwiperSlide>
                    <SwiperSlide><img src={brand3} alt="brand3" /></SwiperSlide>
                    <SwiperSlide><img src={brand4} alt="brand4" /></SwiperSlide>
                    <SwiperSlide><img src={brand5} alt="brand5" /></SwiperSlide>
                    <SwiperSlide><img src={brand6} alt="brand6" /></SwiperSlide>
                    <SwiperSlide><img src={brand7} alt="brand7" /></SwiperSlide>
                    <SwiperSlide><img src={brand8} alt="brand8" /></SwiperSlide>
                </Swiper>
            </div>

            {/* for medium screens */}
            <div className='hidden md:block lg:hidden'>
                <Swiper slidesPerView={3} loop={true} modules={[Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }}>
                    <SwiperSlide><img src={brand1} alt="brand1" /></SwiperSlide>
                    <SwiperSlide><img src={brand2} alt="brand2" /></SwiperSlide>
                    <SwiperSlide><img src={brand3} alt="brand3" /></SwiperSlide>
                    <SwiperSlide><img src={brand4} alt="brand4" /></SwiperSlide>
                    <SwiperSlide><img src={brand5} alt="brand5" /></SwiperSlide>
                    <SwiperSlide><img src={brand6} alt="brand6" /></SwiperSlide>
                    <SwiperSlide><img src={brand7} alt="brand7" /></SwiperSlide>
                    <SwiperSlide><img src={brand8} alt="brand8" /></SwiperSlide>
                </Swiper>
            </div>

            {/* for large screens */}
            <div className='hidden lg:block'>
                <Swiper slidesPerView={5} loop={true} modules={[Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }}>
                    <SwiperSlide><img src={brand1} alt="brand1" /></SwiperSlide>
                    <SwiperSlide><img src={brand2} alt="brand2" /></SwiperSlide>
                    <SwiperSlide><img src={brand3} alt="brand3" /></SwiperSlide>
                    <SwiperSlide><img src={brand4} alt="brand4" /></SwiperSlide>
                    <SwiperSlide><img src={brand5} alt="brand5" /></SwiperSlide>
                    <SwiperSlide><img src={brand6} alt="brand6" /></SwiperSlide>
                    <SwiperSlide><img src={brand7} alt="brand7" /></SwiperSlide>
                    <SwiperSlide><img src={brand8} alt="brand8" /></SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default FBrandsSlider;