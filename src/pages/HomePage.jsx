import React from 'react';
import MaxWidth from '../components/MaxWidth';
import Hero from '../components/Home/Hero';
import RecentListing from '../components/Home/RecentListing';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <MaxWidth>
                <RecentListing></RecentListing>
            </MaxWidth>
        </div>
    );
};

export default HomePage;