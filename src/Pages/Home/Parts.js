import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    return (
        <div className='mt-16'>
            <h2 className='text-4xl mb-5 font-semibold text-center text-primary'>Parts Collection</h2>
            <div className='px-16'>
                {
                    parts.map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;