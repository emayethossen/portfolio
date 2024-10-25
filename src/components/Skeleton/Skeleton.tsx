// Skeleton.js
import React from 'react';

const Skeleton = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-20 h-24 bg-slate-200 animate-pulse mb-4' />
            <div className='w-24 h-6 bg-slate-200 animate-pulse mb-2' />
            <div className='w-16 h-4 bg-slate-200 animate-pulse' />
        </div>
    );
};

export default Skeleton;
