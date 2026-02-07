import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';


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

                <div className='hidden xl:block'>
                    <Swiper slidesPerView={3} spaceBetween={20} loop={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }} pagination={{ dynamicBullets: true }}>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className='hidden md:block xl:hidden'>
                    <Swiper slidesPerView={2} spaceBetween={20} loop={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }} pagination={{ dynamicBullets: true }}>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className='md:hidden'>
                    <Swiper slidesPerView={1} spaceBetween={20} loop={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 1500, disableOnInteraction: false }} pagination={{ dynamicBullets: true }}>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
                                <div className='flex justify-between'>
                                    <p className='text-primary text-5xl'><FaQuoteLeft /></p>
                                    <p className='text-primary flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate quaerat modi excepturi veritatis, optio molestias, non perspiciatis doloremque corrupti voluptas cum maxime quo di Eos optio voluptas vero maiores perspiciatis!</p>
                                <div className='flex items-center gap-3'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-sm'>Jhon Deo</p>
                                        <p className='text-xs font-base-500 text-gray-500'>Customer</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                    </Swiper>
                </div>


            </div>

        </div>
    );
};

export default Testimonial;