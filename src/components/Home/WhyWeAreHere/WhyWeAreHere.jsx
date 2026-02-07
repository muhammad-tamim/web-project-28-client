import React from 'react';
import { CiClock2, CiHeart, CiPlay1 } from 'react-icons/ci';
import { Link } from 'react-router';
import MaxWidth from '../../MaxWidth';
import { IoIosPeople } from 'react-icons/io';
import { MdArrowOutward } from 'react-icons/md';
import car1 from '../../../assets/images/car1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import achievementsVideo from '../../../assets/videos/achievements.mp4'

const WhyWeAreHere = () => {
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

                    <div>
                        <div className='hidden xl:block'>
                            <Swiper slidesPerView={3} spaceBetween={20} loop={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }} pagination={{ clickable: true }}>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>

                        <div className='hidden md:block xl:hidden'>
                            <Swiper slidesPerView={2} spaceBetween={20} loop={true} modules={[Autoplay, Pagination]} autoplay={{ delay: 1500, disableOnInteraction: false }} pagination={{ clickable: true }}>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>

                        <div className='md:hidden'>
                            <Swiper slidesPerView={1} loop={true} modules={[Autoplay, Pagination]} autoplay={{ delay: 1500, disableOnInteraction: false }} pagination={{ clickable: true }}>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                                        <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                                        <div className="hero-overlay rounded-3xl"></div>

                                        <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                                        <div className='absolute bottom-4 right-4'>
                                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                                <MdArrowOutward />
                                            </button>
                                        </div>

                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>

                    </div>

                </div>
            </MaxWidth>
        </div>
    );
};

export default WhyWeAreHere; 