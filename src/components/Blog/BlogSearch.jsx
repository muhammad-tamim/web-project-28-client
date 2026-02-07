import React from 'react';
import { FaSearch } from 'react-icons/fa';

const BlogSearch = () => {
    return (
        <div className='bg-base-300 p-10 rounded-3xl'>
            <div className='relative flex items-center'>
                <input type="text" className='input w-full input-xl rounded-full input-primary focus:outline-none text-sm' placeholder='Type Here' />
                <button className="absolute right-1 btn btn-lg btn-circle btn-primary">
                    <FaSearch />
                </button>
            </div>
        </div>
    );
};

export default BlogSearch;