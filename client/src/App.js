import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RegisterComplete from './components/RegisterComplete';
import Home from './components/Home';
import FuelQuoteForm from './components/FuelQuoteForm';
import FuelQuoteHistory from './components/FuelQuoteHistory';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" replace />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/register-complete" element={<RegisterComplete />} />

        <Route exact path="/home" element={<Home />} />
        <Route exact path="/fuel-quote-form" element={<FuelQuoteForm />} />
        <Route exact path="/fuel-quote-history" element={<FuelQuoteHistory />} />
        <Route exact path="/user-profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
