import React, { useEffect, useState } from 'react';

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

  const [expandedPlantId, setExpandedPlantId] = useState(null);

  const toggleDetails = (plantId) => {
    if (expandedPlantId === plantId) {
      setExpandedPlantId(null);
    } else {
      setExpandedPlantId(plantId);
    }
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {data.map((plant, index) => (
        <div key={index} className="p-4 my-4 border border-gray-300 rounded-lg bg-gray-50">
          <div
            className="cursor-pointer"
            onClick={() => toggleDetails(plant.id)}
          >
            <h2 className="font-semibold text-2xl hover:underline">Plant Name: {plant.name}</h2>
            {expandedPlantId === plant.id && (
              <div>
                <p>Scientific Name: {plant.scientific_name}</p>
                <p>Adopted Technology: {plant.adopted_tech}</p>
                <p>Average Yield: {plant.avg_yield}</p>
                <p>Edible Part: {plant.edible_part}</p>
                <p>Family: {plant.family}</p>
                <p>Nutrition: {plant.nutrition}</p>
                <p>Pests: {plant.pests}</p>
                <p>Planting Material: {plant.planting_material}</p>
                <p>Pollination: {plant.pollination}</p>
                <p>Source: {plant.source}</p>
                <p>Variety: {plant.variety}</p>
                <p>Vernacular Name: {plant.vernacular_name}</p>
                <p>Flowering: {plant.flowering}</p>
                <p>Fruiting: {plant.fruiting}</p>
                <p>Duration: {plant.duration}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Plantdetails;
