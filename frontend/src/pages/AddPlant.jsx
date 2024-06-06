import React, { useState } from 'react';

function AddPlant() {
  const initialFormData = {
    name: '',
    scientific_name: '',
    adopted_tech: '',
    avg_yield: '',
    edible_part: '',
    family: '',
    nutrition: '',
    pests: '',
    planting_material: '',
    pollination: '',
    source: '',
    variety: '',
    vernacular_name: '',
    flowering: '',
    fruiting: '',
    duration: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [image, setImage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (image) {
      data.append('image', image);
    }

    fetch('http://localhost:8081/addplant', {
      method: 'POST',
      body: data
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setIsSuccess(true); // Show success popup
      setFormData(initialFormData); // Reset the form
      setImage(null); // Reset the image input
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error
    });
  };

  const formFields = [
    { name: 'name', placeholder: 'Name', label: 'Name' },
    { name: 'scientific_name', placeholder: 'Scientific Name', label: 'Scientific Name' },
    { name: 'adopted_tech', placeholder: 'Adopted Technology', label: 'Adopted Tech' },
    { name: 'avg_yield', placeholder: 'Average Yield', label: 'Avg Yield' },
    { name: 'edible_part', placeholder: 'Edible Part', label: 'Edible Part' },
    { name: 'family', placeholder: 'Family', label: 'Family' },
    { name: 'nutrition', placeholder: 'Nutrition', label: 'Nutrition' },
    { name: 'pests', placeholder: 'Pests', label: 'Pests' },
    { name: 'planting_material', placeholder: 'Planting Material', label: 'Planting Material' },
    { name: 'pollination', placeholder: 'Pollination', label: 'Pollination' },
    { name: 'source', placeholder: 'Source', label: 'Source' },
    { name: 'variety', placeholder: 'Variety', label: 'Variety' },
    { name: 'vernacular_name', placeholder: 'Vernacular Name', label: 'Vernacular Name' },
    { name: 'flowering', placeholder: 'Flowering', label: 'Flowering' },
    { name: 'fruiting', placeholder: 'Fruiting', label: 'Fruiting' },
    { name: 'duration', placeholder: 'Duration', label: 'Duration' }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Add a New Plant</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {formFields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>
              {field.label}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Plant
          </button>
        </div>
      </form>
      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md">
            <p className="text-xl font-bold mb-4">Success!</p>
            <p>The plant has been added successfully.</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPlant;
