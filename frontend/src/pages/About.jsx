import React from 'react';

function About() {
  return (
    <div className='about-background'>
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">About PlantPedia</h1>
        <p className="mb-6 text-lg">
          Welcome to <strong>PlantPedia</strong>, your ultimate resource for information on edible plants from around the world. Our platform aims to provide comprehensive and accurate data on various edible plants, making it an invaluable tool for farmers, researchers, and college students.
        </p>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Importance for Different User Groups</h2>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">For Farmers</h3>
            <p>
              PlantPedia helps farmers by offering detailed information on plant varieties, cultivation techniques, pest management, and yield optimization. Access to this data enables farmers to make informed decisions, leading to better crop management and improved productivity.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">For Researchers</h3>
            <p>
              Researchers can use PlantPedia as a reliable source of scientific information on edible plants. Our platform provides access to data on plant genetics, nutritional value, and agricultural practices, facilitating advanced research and innovation in the field of botany and agriculture.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">For College Students</h3>
            <p>
              PlantPedia serves as an excellent educational tool for college students studying botany, agriculture, and environmental science. Students can explore detailed plant profiles, learn about plant biology, and access up-to-date research findings to support their studies and projects.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Features of PlantPedia</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Comprehensive plant profiles with scientific and common names</li>
            <li>Detailed information on plant cultivation and care</li>
            <li>Data on plant nutrition, pests, and diseases</li>
            <li>Search and filter functionality for easy access to information</li>
            <li>Regularly updated content with the latest research findings</li>
            <li>Interactive community forums for knowledge sharing and support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
          <p className="text-lg">
            At PlantPedia, we are committed to providing a comprehensive and accessible resource for anyone interested in edible plants. Whether you are a farmer looking to improve your yield, a researcher seeking detailed plant data, or a student eager to learn, PlantPedia is your go-to platform for all things related to edible plants.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
