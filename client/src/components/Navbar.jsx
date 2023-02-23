import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/js/src/collapse.js';
import logo from '../assets/group-2-logo.png';

export default function Navbar() {
    return (
        // <div>
        //     <header>
        //         <h2 className="logo"><img src={logo} alt="logo"/></h2>
        //         <nav className="navigation">
        //             <button className="top-menu" id="homeBtn">Home</button>
        //             <button className="top-menu" id="quoteHistorytn">Quote History</button>
        //             <button className="top-menu" id="profileBtn">Profile</button>
        //             <button className="btnLogout-popup">Logout</button>
        //         </nav>
        //     </header>
        // </div>
        <div>
            <section id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                    <div className="container">
                        <img src={logo} className="d-inline-block align-top logo" alt="logo"/>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link ms-3" to="/fuel-quote-form">Get Quote</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link ms-3" to="/fuel-quote-history">Quote History</NavLink>
                                </li>
                            </ul>

                            <NavLink to="/user-profile" className="btn btn-outline-light ms-auto px-4 rounded-pill border-3">User Profile</NavLink>

                            <NavLink to="/login" className="btn btn-outline-light ms-4 px-4 rounded-pill">Login</NavLink>

                            <NavLink to="/register" className="btn btn-outline-light ms-4 px-4 rounded-pill">Register</NavLink>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}
