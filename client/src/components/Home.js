import { Link } from 'react-router-dom';
// import HomeNavbar from './HomeNavbar';
// import HomeFooter from './HomeFooter';

const Home = () => {
    const content = (
        <div className="home-background">
            {/* <HomeNavbar/> */}
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <div className="card p-lg-5 card-background border">
                                <div className="card-body text-center text-white">
                                    <h2>Customer Fuel Rate</h2>

                                    <h3>
                                        Predict The Rate of Fuel With Ease and Precision
                                    </h3>

                                    <div className="buttons d-flex justify-content-center">
                                        <Link to="/fuel-quote-form" className="btn btn-outline-light rounded-pill px-5 py-2">Get Quote</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <HomeFooter/> */}
        </div>
    )
    return content
}

export default Home