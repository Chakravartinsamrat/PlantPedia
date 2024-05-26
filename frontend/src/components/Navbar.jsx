import React from 'react';
import { Link } from 'react-router-dom';
import NavImg from '../assests/logo.png';

function Navbar() {
  return (
    <nav className="bg-[#2A5146] text-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center ">
            <img src={NavImg} alt="Logo" className="h-8 w-8 mr-2" />
            <Link to="/" className="font-semibold text-2xl">PlantPedia</Link>
          </div>
          <div className="flex items-center text-xl space-x-8">
            <Link to="/about" className="hover:text-[#D0B17C]">About</Link>
            <Link to="/contact" className="hover:text-[#D0B17C]">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
