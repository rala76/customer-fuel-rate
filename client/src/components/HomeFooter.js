import useAuth from '../hooks/useAuth'

const HomeFooter = () => {
    const { username } = useAuth()

    const content = (
        <div className="footer-login">
            <footer className="footer text-white">
                <div className="container">
                    <footer className="py-5">
                        <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                            <div className="col-3">
                                <h4>{`Current User: ${username}`}</h4>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between pt-3 mt-3 border-top">
                            <p>@ 2023 Company, Inc. All rights reserved.</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-facebook fa-2x"></i>
                                    </a>
                                </li>

                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-instagram fa-2x"></i>
                                    </a>
                                </li>

                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-twitter fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </footer>
        </div>
    )
    return content
}

export default HomeFooter