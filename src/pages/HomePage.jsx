import React from 'react';
import MaxWidth from '../components/MaxWidth';
import Hero from '../components/Home/Hero';
import RecentListing from '../components/Home/RecentListing';
import SpecialOffers from '../components/Home/SpecialOffers';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <MaxWidth>
                <RecentListing></RecentListing>
                <SpecialOffers></SpecialOffers>
            </MaxWidth>
        </div>
    );
};

export default HomePage;