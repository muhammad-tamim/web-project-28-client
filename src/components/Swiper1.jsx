import React from 'react';
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Swiper1 = ({ children }) => {
    return (
        <Swiper
            spaceBetween={20}
            loop
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            pagination={{ dynamicBullets: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
            }}
        >
            {children}
        </Swiper>
    );
};

export default Swiper1;