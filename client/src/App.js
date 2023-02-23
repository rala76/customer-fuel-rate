import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FuelQuoteHistory from './components/FuelQuoteHistory';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/fuel-quote-history" element={<FuelQuoteHistory />} /> */}
      </Routes>
    </>
  );
}

export default App;
