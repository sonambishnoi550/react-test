import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

function App() {
    return (
        <div className="container py-5">
            <h1 className='Map-heading'>Map Cards</h1>
            <div className=" d-flex md-justify-content-between gap-4 max-md-flex-wrap justify-content-center">
                <div>
                    <Link to="/map-card-1" >
                        <div className="card p-4">
                                <h5 className='Card-text'>Lorem</h5>
                            <p className='Card-pera'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim.</p>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to="/map-card-2" className="card-link">
                        <div className="card p-4">
                            <h5 className='Card-text'>Lorem</h5>
                            <p className='Card-pera'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim.</p>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to="/map-card-3" className="card-link">
                        <div className="card p-4">
                            <h5 className='Card-text'>Lorem</h5>
                            <p className='Card-pera'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim.</p>
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
