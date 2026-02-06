import React from 'react';
import PagesBanner from '../components/layouts/PagesBanner';
import bg from '../assets/images/car1.jpg'
import MaxWidth from '../components/MaxWidth';
import ContactCard from '../components/Contact/ContactCard';
import GetInTouch from '../components/Contact/GetInTouch/GetInTouch';

const ContactPage = () => {
    return (
        <div>
            <PagesBanner pageName={'rentax'} title={'Contact Us'} bg={bg}></PagesBanner>

            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <ContactCard></ContactCard>
                    <GetInTouch></GetInTouch>
                </div>
            </MaxWidth>

        </div>
    );
};

export default ContactPage;