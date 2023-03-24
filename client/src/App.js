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
import Prefetch from './features/auth/Prefetch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route element={<Prefetch />}>
          <Route path="home" element={<HomeLayout />}>
            <Route index element={<Home />} />

            <Route path="profile/user/:id" element={<UserProfile />} />

            <Route path="fuelQuotes" element={<FuelQuoteHistory />} />

            {/* <Route path="profile">
              <Route index element={<UserProfile />} />
            </Route>
            <Route path="fuelQuotes">
              <Route index element={<FuelQuoteHistory />} />
            </Route> */}

          </Route> {/* End Home */}
        </Route>

      </Route> {/* End Public */}
    </Routes>
  );
}

export default App;
