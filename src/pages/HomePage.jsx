import React from 'react';
import MaxWidth from '../components/MaxWidth';
import Hero from '../components/Home/Hero';
import RecentListing from '../components/Home/RecentListing';
import SpecialOffers from '../components/Home/SpecialOffers';
import OurAchievements from '../components/Home/OurAchievements';
import LatestNews from '../components/Home/LatestNews';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <RecentListing></RecentListing>
                    <SpecialOffers></SpecialOffers>
                    <OurAchievements></OurAchievements>
                    <LatestNews></LatestNews>
                </div>
            </MaxWidth>
        </div>
    );
};

export default HomePage;