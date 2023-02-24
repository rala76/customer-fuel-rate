import React from 'react';
import NavbarHome from './NavbarHome';
import Footer from './Footer';

export default function UserProfile() {
    return (
        <div className="profile-management-background">
            <NavbarHome/>

            <section id="profileManagement">
                <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-4 mt-2">
                            <div className="card p-lg-5 card-background">
                                <div className="card-body text-white">
                                    <h2>Profile Management</h2>

                                    <form action="#">
                                        <div className="profileManagement-input-box">
                                            <input type="text" placeholder=" " value="Group 2" maxLength="50" required/>
                                            <label>Full Name</label>
                                        </div>

                                        <div className="profileManagement-input-box">
                                            <input type="text" placeholder=" " value="8929 Valwood Pkwy" maxLength="100" required/>
                                            <label>Address 1</label>
                                        </div>

                                        <div className="profileManagement-input-box">
                                            <input type="text" placeholder=" " value="" maxLength="100"/>
                                            <label>Address 2</label>
                                        </div>

                                        <div className="profileManagement-input-box">
                                            <input type="text" placeholder=" " value="Houston" maxLength="100" required/>
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
                                            <input id="zipCode" className="form-control form-control-sm" type="text" value="72745" minlength="5" maxlength="9" required/>
                                            </div>
                                        </div>

                                        <button type="submit" className="btnSubmitEditProfile mt-4">Edit Profile</button>
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
