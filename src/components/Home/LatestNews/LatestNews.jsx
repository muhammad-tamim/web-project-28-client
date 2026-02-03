import React from 'react';
import car1 from '../../../assets/images/car2.jpg'
import { MdArrowOutward } from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';


const LatestNews = () => {
    return (
        <div className=''>
            <div className='text-center space-y-3 mb-10'>
                <p className='text-primary text-[11px] tracking-[5px]'>OUR BLOG</p>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Latest <span className='text-primary'>News</span></h1>
            </div>

            <div className='hidden xl:block'>
                <Swiper slidesPerView={3} spaceBetween={6} modules={[Pagination]} pagination={{ dynamicBullets: true }}>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                            <div className="hero-overlay rounded-3xl"></div>

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
                                <button className="right-1 btn btn-lg btn-circle btn-primary">
                                    <MdArrowOutward />
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='hidden md:block xl:hidden'>
                <Swiper slidesPerView={2} spaceBetween={6} loop={true} modules={[Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }}>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                            <div className="hero-overlay rounded-3xl"></div>

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold text-xl border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
                                <button className="right-1 btn btn-lg btn-circle btn-primary">
                                    <MdArrowOutward />
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='md:hidden'>
                <Swiper slidesPerView={1} spaceBetween={6} loop={true} modules={[Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }}>
                    <SwiperSlide>
                        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                            <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                            <div className="hero-overlay rounded-3xl"></div>

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
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

                            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>Rules</p>

                            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                                <h2 className="text-white font-semibold border-r border-r-primary">Penalties for violating the rules in rental cars</h2>
                                <button className="right-1 btn btn-lg btn-circle btn-primary">
                                    <MdArrowOutward />
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>



        </div >
    );
};

export default LatestNews;