import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4fw-bolder mb-4 text-center text-white">Customer Fuel Rate</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">
                                Predict The Rate of Fuel With Ease and Precision
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/fuel-quote-form" className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
