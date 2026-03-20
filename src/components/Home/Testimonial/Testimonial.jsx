import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { TestimonialCard } from '../../Cards/TestimonialCard';

const testimonialsData = [
    {
        id: 1,
        name: "Rahim Uddin",
        role: "Business Owner",
        rating: 5,
        comment:
            "Rentax made car rentals incredibly easy. I booked a car within minutes, and the entire process was smooth and transparent.",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: 2,
        name: "Nusrat Jahan",
        role: "Traveler",
        rating: 5,
        comment:
            "I’ve used multiple rental platforms before, but this one stands out. Clean UI, fast booking, and no hidden charges.",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: 3,
        name: "Tanvir Hasan",
        role: "Freelancer",
        rating: 4,
        comment:
            "Great experience overall. The car quality was excellent, and customer support was responsive when I needed help.",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 4,
        name: "Farhana Akter",
        role: "Entrepreneur",
        rating: 5,
        comment:
            "Managing my cars as a seller is super now. Dashboard is clean and everything is well organized.",
        image: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: 5,
        name: "Imran Hossain",
        role: "Corporate User",
        rating: 4,
        comment:
            "We use Rentax for business trips. Reliable cars and consistent service every time.",
        image: "https://i.pravatar.cc/150?img=5",
    },
];

const Testimonial = () => {
    return (
        <div>

            <div className='flex justify-center mb-10'>
                <div className='border h-14 border-primary w-0'></div>
            </div>

            <div className='text-center space-y-3 mb-10'>
                <p className='text-primary text-[11px] tracking-[5px]'>TESTIMONIAL</p>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>What<span className='text-primary'> Clients Say</span></h1>
            </div>

            <div>

                <Swiper
                    spaceBetween={20}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ dynamicBullets: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {testimonialsData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <TestimonialCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>

        </div>
    );
};

export default Testimonial;