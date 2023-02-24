import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLogin from './NavbarLogin';
import Footer from './Footer';

export default function Login() {
    return (
        <div className="login-background">
            <NavbarLogin/>

            <section id="login">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mt-2">
                            <div className="card p-lg-5 card-background">
                                <div className="card-body text-white">
                                    <h2>Login</h2>

                                    <form action="/home">
                                        <div className="login-input-box">
                                            <i className="fa fa-envelope"></i>
                                            <input type="text" id="userLogin" placeholder=" " minlength="2" required/>
                                            <label>Username</label>
                                        </div>

                                        <div className="login-input-box">
                                            <i className="fa fa-lock"></i>
                                            <input type="password" id="passLogin" placeholder=" " required/>
                                            <label>Password</label>
                                        </div>

                                        <div className="rememberMe-forgotPass">
                                            <label><input type="checkbox"/> Remember me</label>
                                            
                                            <NavLink to="/login" className="forgotPass">Forgot Password?</NavLink>
                                        </div>

                                        <button type="submit" className="btnSubmitLogin">Login</button>
                                        
                                        <div className="loginToRegister">
                                            <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
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
