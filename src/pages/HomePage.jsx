import React from 'react';
import MaxWidth from '../components/MaxWidth';
import Hero from '../components/Home/Hero';
import RecentListing from '../components/Home/RecentListing';
import Achievements from '../components/Home/Achievements/Achievements';
import LatestNews from '../components/Home/LatestNews/LatestNews';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import Promo from '../components/Home/Promo';
import RentalProcess from '../components/Home/RentalProcess';
import CarTypes from '../components/Home/CarTypes/CarTypes';
import CarBrands from '../components/Home/CarBrands/CarBrands';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>

            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <CarBrands></CarBrands>
                    <CarTypes></CarTypes>
                    <RecentListing></RecentListing>
                </div>
            </MaxWidth>
            <div className='space-y-20 my-20'>
                <Achievements></Achievements>
            </div>
            <div className='space-y-20 my-20'>
                <MaxWidth>
                    <RentalProcess></RentalProcess>
                </MaxWidth>
            </div>


            <div className='space-y-20 my-20'>
                <Promo></Promo>
            </div>

            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <Testimonial></Testimonial>
                    <LatestNews></LatestNews>
                </div>
            </MaxWidth>
        </div >
    );
};

export default HomePage;