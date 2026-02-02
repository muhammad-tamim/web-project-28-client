import React from 'react';

const MaxWidth = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-0">
            {children}
        </div>
    );
};

export default MaxWidth;