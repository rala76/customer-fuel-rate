import React from 'react';
import NavbarHome from './NavbarHome';
import Footer from './Footer';

export default function FuelQuoteHistory() {
    return (
        <div className="fuel-quote-history-background">
            <NavbarHome/>

            <section id="fuelQuoteHistory">
                <div className="container my-5">
                    <div className="quote-history">
                        <table className="table table-striped rounded rounded-5 overflow-hidden">
                            <thead className="history-head">
                                <tr>
                                    <th scope="col" colspan="1">Quote ID</th>
                                    <th scope="col" colspan="1">Address</th>
                                    <th scope="col" colspan="1">Date</th>
                                    <th scope="col" colspan="1">Price Per Gallon</th>
                                    <th scope="col" colspan="1">Gallons Requested</th>
                                    <th scope="col" colspan="1">Total Cost</th>
                                </tr>
                            </thead>

                            <tbody className="table-group-divider" style={{ 'text-align': 'center' }}>
                                <tr>
                                    <th scope="row">123</th>
                                    <td>8929 Valwood Pkwy</td>
                                    <td>3-15-2021</td>
                                    <td>$2.34</td>
                                    <td>30</td>
                                    <td>$1234</td>
                                </tr>
                                <tr>
                                    <th scope="row">123</th>
                                    <td>8929 Valwood Pkwy</td>
                                    <td>3-15-2021</td>
                                    <td>$2.34</td>
                                    <td>30</td>
                                    <td>$1234</td>
                                </tr>
                                <tr>
                                    <th scope="row">123</th>
                                    <td>8929 Valwood Pkwy</td>
                                    <td>3-15-2021</td>
                                    <td>$2.34</td>
                                    <td>30</td>
                                    <td>$1234</td>
                                </tr>
                                <tr>
                                    <th scope="row">123</th>
                                    <td>8929 Valwood Pkwy</td>
                                    <td>3-15-2021</td>
                                    <td>$2.34</td>
                                    <td>30</td>
                                    <td>$1234</td>
                                </tr>
                                <tr>
                                    <th scope="row">123</th>
                                    <td>8929 Valwood Pkwy</td>
                                    <td>3-15-2021</td>
                                    <td>$2.34</td>
                                    <td>30</td>
                                    <td>$1234</td>
                                </tr>
                                <tr>
                                    <th scope="row">123</th>
                                    <td>8929 Valwood Pkwy</td>
                                    <td>3-15-2021</td>
                                    <td>$2.34</td>
                                    <td>30</td>
                                    <td>$1234</td>
                                </tr>
                                <tr>
                                    <th scope="row">123</th>
                                    <td>8929 Valwood Pkwy</td>
                                    <td>3-15-2021</td>
                                    <td>$2.34</td>
                                    <td>30</td>
                                    <td>$1234</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
