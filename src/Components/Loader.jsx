import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-30"></div>
                <div className="w-full h-full border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
            </div>
        </div>
    );
};

export default Loader;
