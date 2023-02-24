import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLogin from './NavbarLogin';
import Footer from './Footer';

export default function RegisterComplete() {
    return (
        <div className="register-background">
            <NavbarLogin/>

            <section id="register">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mt-2">
                            <div className="card p-lg-5 card-background">
                                <div className="card-body text-white">
                                    <h2>Complete Registration</h2>

                                    <form action="/home">
                                        <div className="register-input-box">
                                            <input type="text" placeholder=" " maxlength="50" required/>
                                            <label className="email">Full Name</label>
                                        </div>

                                        <div className="register-input-box">
                                            <input type="text" placeholder=" " maxlength="100" required/>
                                            <label>Address 1</label>
                                        </div>

                                        <div className="register-input-box-optional">
                                            <input type="text" placeholder=" " maxlength="100"/>
                                            <label>Address 2</label>
                                        </div>

                                        <div className="register-input-box">
                                            <input type="text" placeholder=" " maxlength="100" required/>
                                            <label>City</label>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col">
                                            <label for="states">State:</label>
                                            <select id="states" name="states" className="form-select form-select-sm" style={{'width': '4rem'}} required>
                                                <option value="Texas">TX</option>
                                                <option value="California">CA</option>
                                                <option value="Florida">FL</option>
                                                <option value="Alaska">AL</option>
                                            </select>
                                            </div>

                                            <div className="col">
                                            <label for="zipCode" className="zipcode">Zip code:</label>
                                            <input id="zipCode" className="form-control form-control-sm" type="text" minlength="5" maxlength="9" required/>
                                            </div>
                                        </div>

                                        <button type="submit" className="btnSubmitFinalRegister" style={{'margin-top': '25px'}}>Register</button>

                                        <div className="registerToLogin">
                                            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
                                        </div>
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
