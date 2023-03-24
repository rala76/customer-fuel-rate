import { Outlet } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';
import HomeFooter from './HomeFooter';

const HomeLayout = () => {
    return (
        <>
            <HomeNavbar/>
            <div>
                <Outlet />
            </div>
            <HomeFooter/>
        </>
    )
}

export default HomeLayout