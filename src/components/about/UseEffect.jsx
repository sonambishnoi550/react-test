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
            <div className="card mx-auto" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Counting to 100</h5>
                    <p className="card-text display-4">{count}</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
