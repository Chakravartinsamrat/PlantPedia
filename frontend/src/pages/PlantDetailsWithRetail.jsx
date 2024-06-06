import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PlantDetailsWithRetail() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [retail, setRetail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/plantdetails/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.plant) {
          const plantWithImageUrl = {
            ...data.plant,
            imageUrl: data.plant.image ? `http://localhost:8081/uploads/${data.plant.image}` : 'https://via.placeholder.com/150'
          };
          setPlant(plantWithImageUrl);
        }
        if (data.retail) {
          setRetail(data.retail);
        }
      })
      .catch(err => console.error('Error fetching data:', err));
  }, [id]);

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 Poppins">
      <div className="flex flex-col items-center">
        <img src={plant.imageUrl} alt={`Image of ${plant.name}`} className="h-32 w-32 rounded-full mb-4" />
        <h1 className="font-semibold text-xl sm:text-2xl">{plant.name}</h1>
        <p>{plant.scientific_name}</p>
        {/* Add more plant details as needed */}
      </div>
      <div className="mt-8">
        <h2 className="font-semibold text-lg">Retail Details</h2>
        {retail.length > 0 ? (
          <ul>
            {retail.map((detail, index) => (
              <li key={index} className="mt-2 border-b pb-2">
                <p>Region: {detail.region}</p>
                <p>Export Quantity: {detail.exportquantity}</p>
                <p>Top Country: {detail.topcountry}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No retail details available.</p>
        )}
      </div>
    </div>
  );
}

export default PlantDetailsWithRetail;
