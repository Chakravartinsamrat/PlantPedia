import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tomatoImage from '../assests/plantImages/tomato.jpg';
import potatoImage from '../assests/plantImages/potato.jpg';
import carrotImage from '../assests/plantImages/carrot.jpg';
import broccoliImage from '../assests/plantImages/broccoli.jpg';
import onionImage from '../assests/plantImages/onion.jpg';
import eggplantImage from '../assests/plantImages/eggplant.jpg';

function Plantdetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:8081/plantdetails')
      .then(res => res.json())
      .then(data => {
        console.log('Data fetched:', data);
        setData(data);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);


  const getImageUrl = (plantName) => {
    const imageMap = {
      Potato: potatoImage,
      Tomato: tomatoImage,
      Carrot: carrotImage,
      Onion : onionImage,
      Broccoli : broccoliImage,
      Eggplant : eggplantImage
      // Add more mappings as needed
    };
    return imageMap[plantName] || 'https://via.placeholder.com/150';
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((plant, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-50">
            <div className="cursor-pointer grid grid-cols-2 gap-4">
              <img 
                src={getImageUrl(plant.name)} 
                alt={`Image of ${plant.name}`} 
                className="h-32 w-32 rounded-full mb-4" 
              />
              <div className="font-semibold text-2xl justify-self-center self-center">Plant Name:<span className='hover:underline'>{plant.name}</span>
              <Link to={`/moredetails/${plant.id}`}>
              <button key={plant.id} className="mt-4 bg-green-700 hover:bg-green-800 text-white text-base font-bold py-2 px-4 rounded-full hover:shadow-md transition duration-300">
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
