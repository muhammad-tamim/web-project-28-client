import React from 'react';
import heroVideoMp4 from '../../assets/videos/hero-video.mp4'
import heroVideoWebm from '../../assets/videos/hero-video.webm'
import heroImage from '../../assets/images/hero-bg.jpg'

const PagesBanner = ({ title, pageName = '' }) => {
    return (
        <div className='relative min-h-[40vh] overflow-hidden' >

            <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline preload="metadata" poster={heroImage}>
                <source src={heroVideoWebm} type="video/webm" />
                <source src={heroVideoMp4} type="video/mp4" />
            </video>

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