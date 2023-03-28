import './App.css';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import HomeLayout from './components/HomeLayout';
import Public from './components/Public';
import Home from './components/Home';
import FuelQuoteHistory from './features/fuelQuote/FuelQuoteHistory';
import UserProfile from './features/users/UserProfile';
import EditUser from './features/users/EditUser';
import Prefetch from './features/auth/Prefetch';
import PersistLogin from './features/auth/PersistLogin';
import FuelQuoteForm from './features/fuelQuote/FuelQuoteForm';

function App() {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                {/* Public Routes */}
                <Route index element={<Public />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                {/* Protected Routes */}
                <Route element={<PersistLogin />}>
                    <Route element={<Prefetch />}>
                        <Route path="home" element={<HomeLayout />}>
                            <Route index element={<Home />} />

                            <Route path="profile">
                                {/* <Route index element={<SomePage />} /> */}
                                <Route path=":id" element={<EditUser />} />
                            </Route>

                            <Route path="fuelQuotesHistory">
                                <Route path=":id" element={<FuelQuoteHistory />} />
                            </Route>

                            <Route path="fuelQuoteForm">
                                <Route path=":id" element={<FuelQuoteForm />} />
                            </Route>

                            {/* <Route path="profile/:id" element={<UserProfile />} /> */}

                            {/* <Route path="fuelQuotesHistory" element={<FuelQuoteHistory />} /> */}

                        </Route> {/* End Home */}
                    </Route>
                </Route> {/* End of Protected Routes */}

            </Route> {/* End Public */}
        </Routes>
    );
}

export default App;
