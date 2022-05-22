import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(()=>{
        fetch('parts.json')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    return (
        <div>
            <h2>Parts: {parts.length}</h2>
            <div>
                {
                    parts.map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;