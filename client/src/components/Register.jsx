import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLogin from './NavbarLogin';
import Footer from './Footer';

export default function Register() {
    return (
        <div className="register-background">
            <NavbarLogin/>

            <section id="register">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mt-2">
                            <div className="card p-lg-5 card-background">
                                <div className="card-body text-white">
                                    <h2>Registration</h2>

                                    <form action="/register-complete">
                                        <div className="register-input-box">
                                            <i className="fa fa-envelope"></i>
                                            <input type="text" id="userLogin" placeholder=" " minlength="2" required/>
                                            <label>Username</label>
                                        </div>

                                        <div className="register-input-box">
                                            <i className="fa fa-lock"></i>
                                            <input type="password" id="passLogin" placeholder=" " minlength="2" required/>
                                            <label>Password</label>
                                        </div>

                                        <div className="agreeTermsCond">
                                            <label><input type="checkbox" required/> I agree to the Terms & Conditions</label>
                                        </div>

                                        <button type="submit" className="btnSubmitRegister">Register</button>
                                        
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
