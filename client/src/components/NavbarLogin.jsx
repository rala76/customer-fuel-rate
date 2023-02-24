import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/js/src/collapse.js';
import logo from '../assets/group-2-logo.png';

export default function Navbar() {
    return (
        <div>
            <section id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                    <div className="container">
                        <img src={logo} className="d-inline-block align-top logo" alt="logo"/>
                    </div>
                </nav>
            </section>
        </div>
    )
}
