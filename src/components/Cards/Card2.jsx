import React from 'react';

const Card2 = ({ number, title, paragraph, routes, btnName }) => {
    return (
        <div className="card rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
            <div className='flex items-center gap-5'>
                <button className="right-1 btn btn-lg btn-circle btn-primary">{number}</button>
                <h1 className='text-2xl font-medium'>{title}</h1>
            </div>
            <p className='text-gray-500 text-sm'>{paragraph}</p>
            <Link to={`${routes}`}><button className='btn btn-primary btn-outline rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1'>{btnName} <span><MdArrowOutward /></span></button></Link>
        </div>
    );
};

export default Card2;