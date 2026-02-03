import React from 'react';
import MaxWidth from '../components/MaxWidth';
import Hero from '../components/Home/Hero';
import RecentListing from '../components/Home/RecentListing';
import SpecialOffers from '../components/Home/SpecialOffers';
import OurAchievements from '../components/Home/OurAchievements';
import LatestNews from '../components/Home/LatestNews/LatestNews';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import Promo from '../components/Home/Promo';
import RentalProcess from '../components/Home/RentalProcess';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <RecentListing></RecentListing>
                    <SpecialOffers></SpecialOffers>
                    {/* <OurAchievements></OurAchievements> */}
                    <RentalProcess></RentalProcess>
                </div>
            </MaxWidth>

            <div className='space-y-20 my-20'>
                <Promo></Promo>
            </div>

            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <Testimonial></Testimonial>
                    <LatestNews></LatestNews>
                </div>
            </MaxWidth>
        </div>
    );
};

export default HomePage;