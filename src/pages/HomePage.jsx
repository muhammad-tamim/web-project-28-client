import React from 'react';
import MaxWidth from '../components/MaxWidth';
import Hero from '../components/Home/Hero';
import RecentListing from '../components/Home/RecentListing';
import SpecialOffers from '../components/Home/SpecialOffers';
import OurAchievements from '../components/Home/OurAchievements';
import LatestNews from '../components/Home/LatestNews/LatestNews';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import Promo from '../components/Home/Promo';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <div className='space-y-20 my-20'>
                <MaxWidth>
                    <RecentListing></RecentListing>
                    <SpecialOffers></SpecialOffers>
                    <OurAchievements></OurAchievements>
                </MaxWidth>

                <Promo></Promo>

                <MaxWidth>
                    <Testimonial></Testimonial>
                    <LatestNews></LatestNews>
                </MaxWidth>
            </div>
        </div>
    );
};

export default HomePage;