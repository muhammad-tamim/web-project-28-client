import React from 'react';
import car1 from '../../../assets/images/car1.jpg'
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';

const CarBrands = () => {
    return (
        <div>
            <div className='flex justify-center mb-10'>
                <div className='border h-14 border-primary w-0'></div>
            </div>

            <div className='text-center space-y-3 mb-10'>
                <p className='text-primary text-[11px] tracking-[5px]'>CATEGORIES</p>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Rental <span className='text-primary'>Car Brands</span></h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                    <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                    <div className="hero-overlay rounded-3xl"></div>

                    <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                    <div className='absolute bottom-4 right-4'>
                        <Link to={`/categories/brands-details/sports-cars`}>
                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                <MdArrowOutward />
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                    <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                    <div className="hero-overlay rounded-3xl"></div>

                    <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                    <div className='absolute bottom-4 right-4'>
                        <Link to={`/categories/brands-details/sports-cars`}>
                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                <MdArrowOutward />
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                    <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                    <div className="hero-overlay rounded-3xl"></div>

                    <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                    <div className='absolute bottom-4 right-4'>
                        <Link to={`/categories/brands-details/sports-cars`}>
                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                <MdArrowOutward />
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                    <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                    <div className="hero-overlay rounded-3xl"></div>

                    <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                    <div className='absolute bottom-4 right-4'>
                        <Link to={`/categories/brands-details/sports-cars`}>
                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                <MdArrowOutward />
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                    <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                    <div className="hero-overlay rounded-3xl"></div>

                    <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                    <div className='absolute bottom-4 right-4'>
                        <Link to={`/categories/brands-details/sports-cars`}>
                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                <MdArrowOutward />
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden '>
                    <img src={car1} alt="car1" className='w-full h-full object-cover rounded-3xl' />

                    <div className="hero-overlay rounded-3xl"></div>

                    <p className='absolute top-4 left-4 w-full flex justify-start text-primary text-xl font-medium'>Sport Cars</p>

                    <div className='absolute bottom-4 right-4'>
                        <Link to={`/categories/brands-details/sports-cars`}>
                            <button className="right-1 btn btn-lg btn-circle btn-primary">
                                <MdArrowOutward />
                            </button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default CarBrands;