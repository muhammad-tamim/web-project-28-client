import React from 'react';
import bg from '../assets/images/car1.jpg'
import MaxWidth from '../components/MaxWidth';
import PagesBanner from '../components/layouts/PagesBanner';
import { IoMdCheckmark } from 'react-icons/io';
import { Link } from 'react-router';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Teams from '../components/About/Teams';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import WhoWeAre from '../components/Home/WhoWeAre';

const AboutPage = () => {
    return (
        <div>
            <PagesBanner pageName={'rentax'} title={'About Us'} bg={bg}></PagesBanner>
            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <WhoWeAre btnHide={'hidden'}></WhoWeAre>
                    <Teams></Teams>
                    <Testimonial></Testimonial>
                </div>
            </MaxWidth>
        </div>
    );
};

export default AboutPage;