import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-purple-100 rounded-lg px-6 md:px-10 lg:px-20 py-10 gap-10">
            
            {/* Left side */}
            <div className="md:w-1/2 flex flex-col items-start gap-6">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 leading-tight">
                    Book Appointment <br />With Good Doctors
                </p>

                <div className="flex flex-col gap-3">
                    <img src={assets.group_profiles} alt="Group Profiles" className="w-40" />
                    <p className="text-gray-700 text-base md:text-lg">
                        Simply browse through our extensive list of trusted doctors,<br />
                        schedule your appointment hassle-free.
                    </p>
                </div>

                <a
                    href="#speciality"
                    className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                >
                    Book Appointment
                    <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4" />
                </a>
            </div>

            {/* Right side */}
            <div className="md:w-1/2">
                <img src={assets.header_img} alt="Header" className="w-full max-w-md mx-auto" />
            </div>
        </div>
    );
};

export default Header;
