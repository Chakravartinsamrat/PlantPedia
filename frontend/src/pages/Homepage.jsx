import React from 'react';
import '../App.css'; 
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
function Homepage() {
  return (
    <div className='background  '>
      <div className='flex flex-col justify-center items-center h-96 px-4'>
        <h1 className='text-4xl font-bold mb-6 text-center'>Welcome To PlantPedia</h1>
        <div className='space-x-4'> 
          <button className='bg-[#102A18] text-white rounded-full px-4 py-2 transition-colors duration-300 hover:bg-[#102A18] hover:text-[#D0B17C]'>
            <Link to='/Plantdetails'>Explore Plants</Link>
          </button>
          <button className='bg-[#102A18] text-white rounded-full px-4 py-2 transition-colors duration-300 hover:bg-[#102A18] hover:text-[#D0B17C] '>
            <Link to='/About'>About us</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
