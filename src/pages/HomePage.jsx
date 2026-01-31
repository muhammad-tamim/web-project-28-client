import React from 'react';
import MaxWidth from '../components/MaxWidth';
import Hero from '../components/Home/Hero';
import RecentListing from '../components/Home/RecentListing';
import SpecialOffers from '../components/Home/SpecialOffers';
import OurAchievements from '../components/Home/OurAchievements';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <MaxWidth>
                <RecentListing></RecentListing>
                <SpecialOffers></SpecialOffers>
                <OurAchievements></OurAchievements>
            </MaxWidth>
        </div>
    );
};

export default HomePage;