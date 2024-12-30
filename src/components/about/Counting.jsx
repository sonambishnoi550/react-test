import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Counting() {
    const numbers = [];
    for (let i = 9; i >= 0; i--) {
        numbers.push(i);
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">For Loop</h2>
            <div className="d-flex justify-content-center">
                <ul className="list-group list-group-horizontal">
                    {numbers.map((num, index) => (
                        <li
                            key={index}
                            className="list-group-item list-group-item-primary mx-1"
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
