import PublicNavbar from './PublicNavbar';
import PublicFooter from './PublicFooter';

const Public = () => {
    const content = (
        <div className="home-background">
            <PublicNavbar/>
            
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <div className="card p-lg-5 card-background border">
                                <div className="card-body text-center text-white">
                                    <h2>Welcome to Customer Fuel Rate</h2>

                                    <h3>
                                        Predict The Rate of Fuel With Ease and Precision
                                    </h3>

                                    <hr />

                                    <h5 className="mt-5">Our service uses these criterias:</h5>
                                    <ul className="list-group list-group-flush bg-primary text-white rounded">
                                        <li className="list-group-item bg-primary text-white">Your location</li>
                                        <li className="list-group-item bg-primary text-white">Your purchase history with us</li>
                                        <li className="list-group-item bg-primary text-white">Amount of fuel requested</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PublicFooter/>
        </div>
    )
    return content
}

export default Public