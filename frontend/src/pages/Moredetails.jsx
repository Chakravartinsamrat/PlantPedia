import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Moredetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching plant details for ID:', id);
    fetch(`http://localhost:8081/plantdetails/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log('Plant details fetched:', data);
        if (data.image) {
          data.imageUrl = `http://localhost:8081/uploads/${data.image}`;
        } else {
          data.imageUrl = 'https://via.placeholder.com/150';
        }
        setPlant(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching plant details:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="Poppins p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4">{plant.name}</h1>
      <img 
        src={plant.imageUrl} 
        alt={`Image of ${plant.name}`} 
        className="h-48 w-48 rounded-full mb-4 mx-auto" 
      />
      <div className="text-lg space-y-2">
        <p><strong>Scientific Name:</strong> {plant.scientific_name}</p>
        <p><strong>Adopted Technology:</strong> {plant.adopted_tech}</p>
        <p><strong>Average Yield:</strong> {plant.avg_yield}</p>
        <p><strong>Edible Part:</strong> {plant.edible_part}</p>
        <p><strong>Family:</strong> {plant.family}</p>
        <p><strong>Nutrition:</strong> {plant.nutrition}</p>
        <p><strong>Pests:</strong> {plant.pests}</p>
        <p><strong>Planting Material:</strong> {plant.planting_material}</p>
        <p><strong>Pollination:</strong> {plant.pollination}</p>
        <p><strong>Source:</strong> {plant.source}</p>
        <p><strong>Variety:</strong> {plant.variety}</p>
        <p><strong>Vernacular Name:</strong> {plant.vernacular_name}</p>
        <p><strong>Flowering:</strong> {plant.flowering}</p>
        <p><strong>Fruiting:</strong> {plant.fruiting}</p>
        <p><strong>Duration:</strong> {plant.duration}</p>
      </div>
    </div>
  );
}

export default Moredetails;
