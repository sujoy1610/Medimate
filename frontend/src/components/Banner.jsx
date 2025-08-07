import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()


  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-purple-100 px-6 md:px-10 lg:px-20 py-8 rounded-lg shadow-md gap-6">
      
      {/* Left Side */}
      <div className="flex flex-col items-start gap-4 md:w-1/2">
        <div>
          <p className="text-2xl md:text-3xl font-bold text-blue-800 leading-tight">
            Book Appointment
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-1">
            With 100+ Trusted Doctors
          </p>
        </div>

        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg shadow transition-all duration-300">
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2">
        <img
          src={assets.appointment_img}
          alt="Appointment"
          className="w-full max-w-[280px] md:max-w-[320px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
