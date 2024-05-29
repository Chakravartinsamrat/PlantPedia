import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Plantdetails from './pages/Plantdetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Moredetails from './pages/Moredetails';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/plantdetails" element={<Plantdetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/moredetails/:id" element={<Moredetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
