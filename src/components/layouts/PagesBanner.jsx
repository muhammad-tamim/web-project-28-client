import React from 'react';


const PagesBanner = ({ title, pageName = '', bg }) => {
    return (
        <div className='relative min-h-[70vh] overflow-hidden' >
            <img src={bg} className='absolute inset-0 w-full h-full object-cover' alt="" />
            <div className="absolute inset-0 bg-black/60"></div>

            <div className='absolute inset-0  flex flex-col justify-center items-center gap-3'>
                {pageName && (
                    <p className="text-primary text-[11px] tracking-[5px]">
                        {pageName.toUpperCase()}
                    </p>
                )}
                <h1 className='font-bold text-3xl md:text-4xl text-white text-center'>{title.toUpperCase()}</h1>
            </div>


        </div>
    );
};

export default PagesBanner;