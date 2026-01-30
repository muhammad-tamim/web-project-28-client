import React from 'react';

const MaxWidth = ({ children }) => {
    return (
        <div className="max-w-480 mx-auto">
            {children}
        </div>
    );
};

export default MaxWidth;