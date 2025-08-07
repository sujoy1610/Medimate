import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  const points = [
    "100+ Verified and Experienced Doctors",
    "Instant Booking and Availability Checks",
    "Secure and Confidential Platform",
    "Multiple Specialities & Easy Navigation",
    "Supportive, Fast & User-Friendly Interface"
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-10 md:px-20 lg:px-32 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">About MediMate</h1>
        <p className="text-gray-600 text-base md:text-lg">
          MediMate is committed to connecting patients with trusted, experienced healthcare professionals.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={assets.about_image}
            alt="About Us"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Why Choose Us Cards */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Why Choose MediMate?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-blue-400 hover:text-white transition duration-300 cursor-pointer"
              >
                <p className="text-sm md:text-base font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer message */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} MediMate. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default About;
