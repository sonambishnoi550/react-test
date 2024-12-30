import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Counting() {
    const numbers = [];
    for (let i = 9; i >= 0; i--) {
        numbers.push(i);
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">For Loop</h2>
            <div className="d-flex justify-content-center">
                <ul className="d-flex gap-5">
                    {numbers.map((num, index) => (
                        <li
                            key={index}
                            className="list-group-item  mx-1"
                        >
                            {num}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Counting;
