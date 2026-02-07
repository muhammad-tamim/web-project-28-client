import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';

const BlogCard = () => {
    return (
        <div className="card bg-base-300 w-full shadow-sm rounded-3xl">
            <figure>
                <img
                    src="https://duruthemes.com/demo/html/renax/light/img/slider/5.jpg"
                    alt="Shoes" className='w-full h-[400px] object-cover' />
            </figure>
            <div className="card-body space-y-3">

                <div className='space-x-2'>
                    <div className="badge badge-outline badge-primary">Rent A Car</div>
                    <div className="badge badge-outline badge-primary">27 Apr, 2026</div>
                </div>

                <div className='space-y-1'>
                    <h2 className="card-title font-bold text-3xl">Documents required for car rental</h2>
                    <p className='text-secondary'>Lorem ipsum potenti fringilla pretium ipsum non blandit vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi tristique senectus et netus et malesuada the fames ac turpis enesta mauris suscipit mis nec est farmen.</p>
                </div>

                <Link to={'/blog'}><button className={`btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1`} > Learn More <span><MdOutlineArrowOutward /></span></button></Link>

            </div>
        </div>
    );
};

export default BlogCard;