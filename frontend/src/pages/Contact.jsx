import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending (e.g., API call)
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    console.log('Form Data Submitted:', formData);

    toast.success("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen px-4 sm:px-10 md:px-20 lg:px-32 py-10 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-base md:text-lg">
          We’d love to hear from you! Whether you have a question, feedback, or partnership idea — reach out anytime.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img src={assets.contact_image} alt="Contact Us" className="w-full rounded-xl shadow-md" />
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="md:w-1/2 bg-blue-50 p-6 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-16 text-center text-gray-600">
        <p>📞 +91 93822 20222</p>
        <p>📧 srkarsujoy715@gmail.com</p>
        <p className="mt-2 text-sm">We'll respond within 24 hours on working days.</p>
      </div>
    </div>
  );
};

export default Contact;
