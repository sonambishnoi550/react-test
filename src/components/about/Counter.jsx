import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">React Counter</h2>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    className="btn btn-danger mx-2"
                    onClick={decrement}
                    disabled={count <= 0} 
                >
                    Decrement
                </button>
                <h3 className="mx-4">{count}</h3>
                <button className="btn btn-success mx-2" onClick={increment}>
                    Increment
                </button>
            </div>
        </div>
    );
}

export default Counter;
