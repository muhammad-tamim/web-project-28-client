import React from 'react';

const LoadingSpinner = ({ minHScreen, marginY, size = 20 }) => {
    return (
        <div className={`${minHScreen} ${marginY} flex justify-center items-center`}>
            <span className={`loading loading-spinner ${size} text-primary`}></span>
        </div>
    );
};

export default LoadingSpinner;