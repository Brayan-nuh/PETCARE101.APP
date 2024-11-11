
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Homepage from './pages/Homepage';
import Articles from './pages/Articles';
import Contacts from './pages/Contacts';
import OurProducts from './pages/OurProducts';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Ourproducts" element={<OurProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



