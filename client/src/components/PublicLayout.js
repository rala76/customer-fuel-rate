import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';

const LoginLayout = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div>
                <Outlet />
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default LoginLayout