import React from 'react';

const LoadingSpinner = ({ minHScreen, marginY }) => {
    return (
        <div className={`${minHScreen} ${marginY} flex justify-center items-center`}>
            <span className={`loading loading-spinner size-20 text-primary`}></span>
        </div>
    );
};

export default LoadingSpinner;