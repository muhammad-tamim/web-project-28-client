import React from 'react';

const LoadingSpinner = ({ minHScreen }) => {
    return (
        <div className={`${minHScreen} flex justify-center items-center`}>
            <span className="loading loading-spinner size-20"></span>
        </div>
    );
};

export default LoadingSpinner;