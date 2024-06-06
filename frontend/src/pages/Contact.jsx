import React from 'react';

function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="message">Message</label>
            <textarea 
              id="message" 
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
      </div>
    </div>
  );
}

export default Contact;
