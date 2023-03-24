import { Link } from 'react-router-dom';
import 'bootstrap/js/src/collapse';
import logo from '../img/group-2-logo.png';

const PublicNavbar = () => {
    const content = (
        <div>
            <section id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                    <div className="container">
                        <img src={logo} className="d-inline-block align-top logo" alt="logo"/>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                            </ul>

                            <Link to="/login" className="btn btn-outline-light ms-auto px-4 rounded-pill border-3">Login</Link>

                            <Link to="/register" className="btn btn-outline-light ms-4 px-4 rounded-pill">Register</Link>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
    return content
}

export default PublicNavbar