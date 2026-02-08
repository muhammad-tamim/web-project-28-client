import React from 'react';
import { CiClock2, CiHeart, CiPlay1 } from 'react-icons/ci';
import { Link } from 'react-router';
import MaxWidth from '../../MaxWidth';
import { IoIosPeople } from 'react-icons/io';
import { SwiperSlide } from "swiper/react";
import achievementsVideo from '../../../assets/videos/achievements.mp4'
import Swiper1 from '../../Swiper/Swiper1';
import LoadingSpinner from '../../LoadingSpinner';
import Card1 from '../../Cards/Card1';
import useGetCategories from '../../../hooks/queries/Categories/useGetCategories';

const WhyWeAreHere = () => {


    const { data: categories, isLoading, isError, error } = useGetCategories()

    if (isLoading) {
        return <LoadingSpinner marginY={'20'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    return (
        <div className='relative min-h-[calc(100vh-70px)]'>

            {/* Background Video */}
            <video className="absolute inset-0 w-full h-full object-cover" src={achievementsVideo} autoPlay loop muted playsInline />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <MaxWidth>
                <div className="relative top-20 z-10 w-full text-white">
                    <div className='flex flex-col xl:flex-row xl:gap-0 gap-10 md:flex-col justify-between items-center'>
                        <div className='max-w-xl'>
                            <p className='text-xl mb-4'><span className='text-primary'>Why</span> we're here</p>
                            <h1 className='font-bold text-4xl mb-7'>Get the best price for your car to rent today</h1>
                            <p className='text-white/70'>Are you ready to hit the road for a weekend getaway? Whether it's a business trip, family visit, or a spontaneous adventure, our Weekend Warrior Deal has got you covered!</p>
                        </div>

                        <div className='flex flex-col md:flex-row gap-3 p-3 rounded-xl shadow-[100px] bg-black/60'>
                            <div className='space-y-5 bg-black p-3 rounded-xl py-3'>
                                <div className='flex items-center justify-between gap-10'>
                                    <h3 className='text-4xl font-semibold'>10K+</h3>
                                    <p className='font-semibold text-primary'><IoIosPeople size={40} /></p>
                                </div>
                                <hr />
                                <p className='font-medium'>Happy Customers</p>
                            </div>
                            <div className='space-y-5 bg-black p-3 rounded-xl py-3'>
                                <div className='flex items-center justify-between gap-10'>
                                    <h3 className='text-4xl font-semibold'>90%</h3>
                                    <p className='font-semibold text-primary'><CiHeart size={40} /></p>
                                </div>
                                <hr />
                                <p className='font-medium'>Customer satisfaction</p>
                            </div>
                            <div className='space-y-5 bg-black p-3 rounded-xl py-3'>
                                <div className='flex items-center justify-between gap-10'>
                                    <h3 className='text-4xl font-semibold'>24/7</h3>
                                    <p className='font-semibold text-primary'><CiClock2 size={40} /></p>
                                </div>
                                <hr />
                                <p className='font-medium'>Roadside assistance</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-16 mb-10'>
                        <h3 className='font-bold text-3xl'>Premium Cars</h3>
                    </div>

                    <Swiper1>
                        {categories.map(type => (
                            <SwiperSlide key={type._id}>
                                <Card1 image={type.photoUrl} title={type.name} where={`/categories/types-details/${type.name}`}></Card1>
                            </SwiperSlide>
                        ))}
                    </Swiper1>

                </div>
            </MaxWidth>
        </div>
    );
};

export default WhyWeAreHere; 