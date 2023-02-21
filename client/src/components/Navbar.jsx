import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link ms-3" to="/fuel-quote-form">Fuel Quote Form</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link ms-3" to="/fuel-quote-history">Fuel Quote History</NavLink>
                            </li>
                        </ul>
                        
                        {/* <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">Customer Fuel Rate</NavLink> */}
                        
                        <NavLink to="/login" className="btn btn-light ms-auto px-4 rounded-pill">Login</NavLink>
                        
                        <NavLink to="/register" className="btn btn-light ms-4 px-4 rounded-pill">Register</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}
