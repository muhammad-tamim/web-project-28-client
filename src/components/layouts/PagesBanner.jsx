import React from 'react';
import heroVideo from '../../assets/videos/hero-video.mp4'

const PagesBanner = ({ title, pageName = '' }) => {
    return (
        <div className='relative min-h-[70vh] overflow-hidden' >

            <video className="absolute inset-0 w-full h-full object-cover" src={heroVideo} autoPlay loop muted playsInline />

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