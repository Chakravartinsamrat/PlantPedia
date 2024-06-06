import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Plantdetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/plantdetails')
      .then(res => res.json())
      .then(data => {
        const plantsWithImageUrls = data.map(plant => ({
          ...plant,
          imageUrl: plant.image ? `http://localhost:8081/uploads/${plant.image}` : 'https://via.placeholder.com/150'
        }));
        setData(plantsWithImageUrls);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 Poppins">
      <div className="flex justify-end items-end">
        <Link to="/addplant">
          <button className="mt-4 bg-green-700 hover:bg-green-800 text-white text-base font-bold py-2 px-4 rounded-full hover:shadow-md transition duration-300 mb-4">
            Add Plant
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((plant, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-50">
            <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <img 
                src={plant.imageUrl} 
                alt={`Image of ${plant.name}`} 
                className="h-32 w-32 rounded-full mb-4 mx-auto sm:mx-0" 
              />
              <div className="font-semibold text-xl sm:text-2xl text-center sm:text-left">
                <span className="block">Plant Name:</span>
                <span className="hover:underline mr-2">{plant.name}</span>
                <Link to={`/moredetails/${plant.id}`}>
                  <button className="mt-4 bg-green-700 hover:bg-green-800 text-white text-base font-bold py-2 px-4 rounded-full hover:shadow-md transition duration-300">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plantdetails;
