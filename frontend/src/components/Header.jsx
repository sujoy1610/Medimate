import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
       <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 rounded-3xl shadow-lg px-6 sm:px-10 lg:px-16 py-12 gap-10 lg:gap-20 overflow-hidden">

  {/* Left side */}
  <div className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-left gap-6">
    <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 leading-snug">
      Book Appointment <br className="hidden sm:block"/> With Trusted Doctors
    </p>

    <div className="flex flex-col items-center lg:items-start gap-4">
      <img src={assets.group_profiles} alt="Group Profiles" className="w-44 sm:w-52 lg:w-56 drop-shadow-md" />
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
        Browse through our extensive list of highly qualified doctors <br className="hidden sm:block"/> 
        and schedule your appointment hassle-free.
      </p>
    </div>

    <a
      href="#speciality"
      className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition duration-300"
    >
      Book Appointment
      <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4" />
    </a>
  </div>

  {/* Right side */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src={assets.header_img}
      alt="Header"
      className="w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-lg hover:scale-105 transition duration-300"
    />
  </div>
</div>

    );
};

export default Header;
