import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';


const Teams = () => {
    const team1 = 'https://i.ibb.co.com/5XzVV2fs/team1.jpg'
    const team2 = 'https://i.ibb.co.com/R5sZZjT/team2.jpg'
    const team3 = 'https://i.ibb.co.com/0jqSZ3bh/team3.jpg'
    const team4 = 'https://i.ibb.co.com/1Gjz7kCQ/team4.jpg'
    const team5 = 'https://i.ibb.co.com/hx28Q1yR/team5.jpg'
    const team6 = 'https://i.ibb.co.com/W4jBXvZd/team6.jpg'
    return (
        <div>
            <div className='flex justify-center mb-10'>
                <div className='border h-14 border-primary w-0'></div>
            </div>

            <div className='text-center space-y-3 mb-10'>
                <p className='text-primary text-[11px] tracking-[5px]'>Certified Team</p>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Our Experts <span className='text-primary'>Team</span></h1>
            </div>

            <div className='hidden xl:block'>
                <Swiper slidesPerView={3} spaceBetween={20} loop={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }} pagination={{ dynamicBullets: true }}>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team1} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>James Anderson</p>
                                <p className='text-secondary'>Founder</p>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team2} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Daniel Carter</p>
                                <p className='text-secondary'>CEO</p>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team3} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Ayaan Rahman</p>
                                <p className='text-secondary'>Operations Manager</p>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team4} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Michael Brown</p>
                                <p className='text-secondary'>Fleet & Maintenance</p>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team5} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>William Harris</p>
                                <p className='text-secondary'>Sales Consultant</p>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team6} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Tom Holand</p>
                                <p className='text-secondary'>Marketing</p>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='hidden md:block xl:hidden'>
                <Swiper slidesPerView={2} spaceBetween={20} loop={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }} pagination={{ dynamicBullets: true }}>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team1} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>James Anderson</p>
                                <p className='text-secondary'>Founder</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team2} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Daniel Carter</p>
                                <p className='text-secondary'>CEO</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team3} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Ayaan Rahman</p>
                                <p className='text-secondary'>Operations Manager</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team4} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Michael Brown</p>
                                <p className='text-secondary'>Fleet & Maintenance</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team5} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>William Harris</p>
                                <p className='text-secondary'>Sales Consultant</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team6} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Tom Holand</p>
                                <p className='text-secondary'>Marketing</p>
                            </div>


                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='md:hidden'>
                <Swiper slidesPerView={1} spaceBetween={20} loop={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }} pagination={{ dynamicBullets: true }}>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team1} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>James Anderson</p>
                                <p className='text-secondary'>Founder</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team2} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Daniel Carter</p>
                                <p className='text-secondary'>CEO</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team3} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Ayaan Rahman</p>
                                <p className='text-secondary'>Operations Manager</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team4} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Michael Brown</p>
                                <p className='text-secondary'>Fleet & Maintenance</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team5} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>William Harris</p>
                                <p className='text-secondary'>Sales Consultant</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={team6} alt="car1" className='w-full h-full object-cover rounded-3xl' />


                            <div className='absolute bottom-6 flex flex-col items-center justify-center'>
                                <p className='text-black font-bold text-2xl'>Tom Holand</p>
                                <p className='text-secondary'>Marketing</p>
                            </div>


                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default Teams;
