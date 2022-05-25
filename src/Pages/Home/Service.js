import React from 'react';

const Service = ({service}) => {
    const {img, serviceName} = service;
    return (
        <div className='mt-2 mb-3'>
            <img className='w-96' src={img} alt="" />
            <p className='mt-2 font-bold text-xl text-secondary'>{serviceName}</p>
        </div>
    );
};

export default Service;