import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { NewsCard } from '../../Cards/NewsCard';

const newsData = [
    {
        id: 1,
        title: "Penalties for violating rental car rules",
        category: "Rules",
        image: 'https://www.hallandlampros.com/wp-content/uploads/2026/03/top-college-park-rental-car-accident-lawyer.webp',
    },
    {
        id: 2,
        title: "Top 10 cars for long road trips in 2026",
        category: "Tips",
        image: "https://hips.hearstapps.com/hmg-prod/images/gas-electric-101-66070d2e1bb46.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*",
    },
    {
        id: 3,
        title: "How to choose the best rental car",
        category: "Guide",
        image: 'https://content.skyscnr.com/m/494608a43ab9734d/original/shutterstock_2124238448.jpg?resize=1224%3Aauto',
    },
    {
        id: 4,
        title: "Electric cars vs fuel cars: what to rent?",
        category: "Comparison",
        image: "https://www.thecarexpert.co.uk/wp-content/uploads/2025/01/Tesla-Model-Y-2025-facelift-1920x960.jpg",
    },
    {
        id: 5,
        title: "Hidden costs in car rentals you must know",
        category: "Awareness",
        image: 'https://snaautorental.com/wp-content/uploads/bfi_thumb/how-can-you-avoid-hidden-fees-when-renting-a-car-1-1000-660-qvbmnodgfm26mfpqqsciavsidu5xb2lvt8st23zg2c.jpg',
    },
];

const swiperConfig = {
    spaceBetween: 20,
    loop: true,
    modules: [Pagination, Autoplay],
    autoplay: { delay: 2500, disableOnInteraction: false }, // 1500 is too aggressive
    pagination: { dynamicBullets: true },
};

const LatestNews = () => {
    return (
        <div className=''>

            <div className='flex justify-center mb-10'>
                <div className='border h-14 border-primary w-0'></div>
            </div>

            <div className='text-center space-y-3 mb-10'>
                <p className='text-primary text-[11px] tracking-[5px]'>OUR BLOG</p>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Latest <span className='text-primary'>News</span></h1>
            </div>

            <Swiper
                {...swiperConfig}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 },
                }}
            >
                {newsData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <NewsCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>



        </div >
    );
};

export default LatestNews;