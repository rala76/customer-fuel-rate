import React from 'react';

export default function FuelQuoteHistory() {
    return (
        <div>
            <div className="container my-5">
                <table className="table table-striped">
                    <thead className="table-primary" style={{'text-align': 'center'}}>
                        <tr>
                            <th scope="col" colspan="1" style={{'border-bottom': 'none'}}></th>
                            <th scope="col" colspan="2">Delivery</th>
                            <th scope="col" colspan="3" style={{'border-bottom': 'none'}}></th>
                        </tr>
                        <tr>
                            <th scope="col" colspan="1">Quote ID</th>
                            <th scope="col" colspan="1">Address</th>
                            <th scope="col" colspan="1">Date</th>
                            <th scope="col" colspan="1">Price Per Gallon</th>
                            <th scope="col" colspan="1">Gallons Requested</th>
                            <th scope="col" colspan="1">Total Cost</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider" style={{'text-align': 'center'}}>
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
    )
}
