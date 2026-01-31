import React from 'react';

const OurAchievements = () => {
    return (
        <div className='relative my-20 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[60vh] overflow-hidden'>
            <video autoPlay loop muted preload="auto" className='absolute inset-0 w-full h-full object-cover'>
                <source src="https://www.toyota.com/content/dam/toyota/homepage/tdr-marquee/2025/video/CAM_MY25_LCH_WelcomeMat_TCOM_Desktop_ENG_10_16x9_SSTY8794000H.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/80"></div>

            <div className="absolute inset-0 flex items-center justify-center" >
                <div className='text-white'>
                    <h1 className="text-center font-bold mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our Achievements</h1>

                    <div className="grid justify-center grid-cols-2 gap-6 text-center lg:grid-cols-3">
                        <div className="flex flex-col justify-center m-2">
                            <p className="font-bold leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl">1200 +</p>
                            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">Happy Customers</p>
                        </div>

                        <div className="flex flex-col justify-center m-2">
                            <p className="font-bold leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl">500 +</p>
                            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">Cars Available</p>
                        </div>

                        <div className="flex flex-col justify-center m-2">
                            <p className="font-bold leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl">1000 +</p>
                            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">Bookings Completed</p>
                        </div>

                        <div className="flex flex-col justify-center m-2">
                            <p className="font-bold leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl">4.9/5</p>
                            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">Average Customer Rating</p>
                        </div>

                        <div className="flex flex-col justify-center m-2">
                            <p className="font-bold leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl">8</p>
                            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">Years in Business</p>
                        </div>

                        <div className="flex flex-col justify-center m-2">
                            <p className="font-bold leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl">24/7</p>
                            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">Customer Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAchievements; 