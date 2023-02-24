import React from 'react';
import NavbarHome from './NavbarHome';
import Footer from './Footer';

export default function FuelQuoteForm() {
    return (
        <div className="fuel-quote-form-background">
            <NavbarHome/>

            <section id="fuelQuoteForm">
                <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-4 mt-2">
                            <div className="card p-lg-5 card-background">
                                <div className="card-body text-white">
                                    <h2>Fuel Quote Form</h2>

                                    <form action="#">
                                        <div className="quote-form-input-box">
                                            <input type="number" placeholder=" " min="0" required/>
                                            <label>Gallons Requested</label>
                                        </div>

                                        <div className="quote-form-input-box">
                                            <input type="text" placeholder=" " value="8929 Valwood Pkwy	" readOnly/>
                                            <label>Delivery Address</label>
                                        </div>

                                        <div>
                                            <label>Delivery Date</label>
                                            <input type="date" className="form-control form-control-sm text-center my-1"/>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <label className="mt-3">Price / Gallon</label>
                                            </div>
                                            
                                            <div className="input-group">
                                                <span className="input-group-text my-1" style={{'font-weight': 'bold'}}>$</span>
                                                <input type="text" className="form-control my-1" placeholder=" " value="3.99" readOnly/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <label className="mt-3">Total Amount Due</label>
                                            </div>
                                            
                                            <div className="input-group">
                                                <span className="input-group-text my-1" style={{'font-weight': 'bold'}}>$</span>
                                                <input type="text" className="form-control my-1" placeholder=" " value="3.99" readOnly/>
                                            </div>
                                        </div>

                                        <button type="submit" className="btnSubmitQuoteForm mt-4">Place Order</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
