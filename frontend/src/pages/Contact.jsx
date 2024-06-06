import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ cname: '', email: '', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8081/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setIsSuccess(true);
        setFormData({ cname: '', email: '', message: '' });
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="cname">Name</label>
            <input 
              type="text" 
              id="cname" 
              name="cname"
              value={formData.cname}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5" 
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Message"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg font-bold shadow-md transition duration-300"
          >
            Send Message
          </button>
        </form>
        {isSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-md">
              <p className="text-xl font-bold mb-4">Success!</p>
              <p>Your message has been sent successfully.</p>
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
    </div>
  );
}

export default Contact;
