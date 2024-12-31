import React, { useState, useEffect } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count >= 100) return; 

        const timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000); 

        return () => clearInterval(timer);
    }, [count]);
    return (
        <div className="container text-center mt-5">
            <div className="card mx-auto max-w-300">
                <div className="card-body">
                    <h5 className="">Counting UseEffect</h5>
                    <p className="count m-0">{count}</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
