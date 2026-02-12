import React from 'react';
import PagesBanner from '../components/layouts/PagesBanner';
import MaxWidth from '../components/MaxWidth';
import Form from '../components/AddCar/Form';

const AddCar = () => {

    return (
        <div>
            {/* <PagesBanner pageName={'rentax'} title={'Add Car'}></PagesBanner> */}
            <MaxWidth>
                <div className='space-y-20 my-20 xl:px-10'>
                    <Form></Form>
                </div>
            </MaxWidth>
        </div>
    );
};

export default AddCar;