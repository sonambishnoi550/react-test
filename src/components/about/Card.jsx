import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

function App() {
    return (
        <div className="container">
            <h1>Map Cards</h1>
            <div className=" d-flex justify-content-between gap-4 max-md-flex-wrap">
                <div>
                    <Link to="/map-card-1" className="card-link">
                        <div className="card">
                            <div className="card-body">
                                <h5>Lorem</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to="/map-card-2" className="card-link">
                        <div className="card">
                    
                            <div className="card-body">
                                <h5>lorem</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, laborum.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to="/map-card-3" className="card-link">
                        <div className="card">
                           
                            <div className="card-body">
                                <h5>lorem</h5>
                                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, debitis.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <Routes>
                <Route path="/map-card-:id" element={<MapPage />} />
            </Routes>
        </div>
    );
}

function MapPage() {
    const { id } = useParams();
    const formattedHeading = id.replace(/-/g, ' ');

    return (
        <div className="container">
            <h2>{formattedHeading}</h2>
            <div>
            </div>
        </div>
    );
}

export default App;
