import { useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import 'bootstrap/js/src/collapse';
import logo from '../img/group-2-logo.png';

import { useSendLogoutMutation } from '../features/auth/authApiSlice';

import useAuth from '../hooks/useAuth'

// const HOME_REGEX = /^\/home(\/)?$/
// const FUELQUOTES_REGEX = /^\/home\/fuelQuotes(\/)?$/
// const PROFILE_REGEX = /^\/home\/profile(\/)?$/

const HomeNavbar = () => {
    const { id } = useAuth()

    const navigate = useNavigate()
    // const { pathname } = useLocation()

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()

    useEffect(() => {
        if (isSuccess) {
            navigate('/')
        }
    })

    const onLogoutClicked = () => sendLogout()
    const onProfileClicked = () => navigate(`/home/profile/${id}`)
    // const onFuelQuotesHistoryClicked = () => navigate(`/home/fuelQuotesHistory/${id}`)

    if (isLoading) return <p className="h3 text-white text-center">Loading...</p>

    if (isError) return <p className="h3 text-white text-center">Error: {error.message}</p>

    // let homeClass = null
    // if (!HOME_REGEX.test(pathname) && !FUELQUOTES_REGEX.test(pathname) && !PROFILE_REGEX.test(pathname)) {
    //     homeClass = "dash-header__container--small"
    // }

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
                                    <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link ms-3" to={`/home/fuelQuoteForm/${id}`}>Get Quote</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link ms-3" to={`/home/fuelQuotesHistory/${id}`}>Quote History</Link>
                                </li>
                            </ul>
                            
                            {/* <Link to="/home/profile" className="btn btn-outline-light ms-auto px-4 rounded-pill border-3">Profile</Link> */}
                            <button className="btn btn-outline-light ms-4 px-4 rounded-pill" title="Profile" onClick={onProfileClicked}>Profile</button>

                            {/* <Link to="/logout" className="btn btn-outline-light ms-4 px-4 rounded-pill">Logout</Link> */}
                            <button className="btn btn-outline-light ms-4 px-4 rounded-pill" title="Logout" onClick={onLogoutClicked}>Logout</button>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
    return content
}

export default HomeNavbar