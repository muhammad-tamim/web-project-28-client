import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://img.freepik.com/free-photo/horror-scene-with-eerie-warehouse_23-2150975186.jpg?t=st=1754889774~exp=1754893374~hmac=dc15dfdf01fb4ed4ef9ea456cdb35146025a10f62df5dcf706ed69ab76a24232&w=1060)",
            }}
        >
            {/* Dark overlay */}
            <div className="hero-overlay bg-opacity-10"></div>

            {/* Hero content */}
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">404</h1>

                    <h1 className="mb-5 text-5xl font-bold">
                        Page Not Found
                    </h1>

                    <p className="mb-5 text-lg">
                        Sorry, the page you are looking for does not exist or has been moved.
                        Please check the URL or return to the homepage.
                    </p>

                    <div className="flex gap-3 justify-center">
                        <Link to="/">
                            <button className="btn btn-primary">
                                Go Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
