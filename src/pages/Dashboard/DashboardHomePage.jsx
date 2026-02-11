import React from 'react';
import PagesBanner from '../../components/layouts/PagesBanner';
import MaxWidth from '../../components/MaxWidth';

const DashboardHomePage = () => {
    return (
        <div>
            <PagesBanner pageName={'rentax'} title={'Welcome to the dashboard'}></PagesBanner>
            <MaxWidth>
                <div className='space-y-20 my-20'>

                </div>
            </MaxWidth>
        </div>
    );
};

export default DashboardHomePage;