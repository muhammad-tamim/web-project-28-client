import React from 'react';
import { Link } from 'react-router';
import heroVideo from '../../assets/videos/hero-video.mp4'

const Hero = () => {
    return (
        <div className='hero min-h-screen relative overflow-hidden'>

            {/* Background Video */}
            <video className="absolute inset-0 w-full h-full object-cover" src={heroVideo} autoPlay loop muted playsInline />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="hero-content text-neutral-content text-center">
                <div className="xl:w-5xl space-y-5">
                    <h1 className="text-3xl lg:text-5xl font-bold">
                        Drive Your Dreams <span className='text-primary'>Today!</span>
                    </h1>

                    <p className="text-xs md:text-sm lg:text-base">
                        Affordable, reliable rentals for every journey.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-full'>

                        <select defaultValue="Pick a color" className="select focus:outline-none outline-none border-none text-gray-500 w-full">
                            <option disabled={true}>Any Brand</option>
                            <option>Crimson</option>
                            <option>Amber</option>
                            <option>Velvet</option>
                        </select>

                        <select defaultValue="Pick a color" className="select focus:outline-none outline-none border-none text-gray-500 w-full">
                            <option disabled={true}>Any Type</option>
                            <option>Crimson</option>
                            <option>Amber</option>
                            <option>Velvet</option>
                        </select>

                        <select defaultValue="Pick a color" className="select focus:outline-none outline-none border-none text-gray-500 w-full">
                            <option disabled={true}>Default Price</option>
                            <option>Price Low to High</option>
                            <option>Price High to Low</option>
                        </select>

                        <Link to="/available-cars">
                            <button className="btn btn-primary w-full text-black">Search</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
