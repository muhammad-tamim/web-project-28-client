import React from 'react';

const BlogTags = () => {
    return (
        <div className='bg-base-300 p-10 rounded-3xl space-y-3'>
            <h3 className='font-bold text-2xl'>Categories</h3>
            <hr className='text-gray-300' />
            <div className='flex flex-wrap gap-3'>
                <div className="badge badge-primary badge-lg">Car</div>
                <div className="badge badge-primary badge-lg">Rental</div>
                <div className="badge badge-primary badge-lg">Service</div>
                <div className="badge badge-primary badge-lg">Airport</div>
                <div className="badge badge-primary badge-lg">Limousine</div>
            </div>
        </div>
    );
};

export default BlogTags;