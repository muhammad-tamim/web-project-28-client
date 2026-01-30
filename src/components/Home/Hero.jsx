import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div
            className="hero min-h-[calc(100vh-80px)]"
            style={{
                backgroundImage:
                    "url(https://images.timesdrive.in/photo/msid-151005277,thumbsize-801913/151005277.jpg)",
            }}
        >
            {/* Dark overlay */}
            <div className="hero-overlay bg-opacity-10"></div>

            {/* Hero content */}
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">
                        Drive Your Dreams Today!
                    </h1>

                    <p className="mb-5 text-lg">
                        Affordable, reliable, and ready when you are.
                        Choose from our wide range of premium cars
                        and hit the road in style.
                    </p>

                    <div>
                        <Link to="/available-cars">
                            <button className="btn btn-primary">
                                View Available Cars
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
