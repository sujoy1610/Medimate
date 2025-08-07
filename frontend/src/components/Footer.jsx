import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white px-6 md:px-10 lg:px-20 py-12 mt-10 rounded-lg mb-2">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section */}
        <div className="md:w-1/3">
          <img src={assets.logo} alt="Logo" className="w-28 mb-4" />
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quod? Totam fugit maxime tempore minus qui ex sunt expedita tempora nemo aperiam, ab obcaecati eveniet!
          </p>
        </div>

        {/* Center Section */}
       <div className="md:w-1/3">
  <p className="text-lg font-semibold mb-3">COMPANY</p>
  <ul className="flex  space-x-4 text-sm text-gray-300">
    <li>
      <NavLink to="/" className="hover:text-white cursor-pointer">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about" className="hover:text-white cursor-pointer">About</NavLink>
    </li>
    <li>
      <NavLink to="/contact" className="hover:text-white cursor-pointer">Contact Us</NavLink>
    </li>
    <li>
      <NavLink to="/privacypolicy" className="hover:text-white cursor-pointer">Privacy Policy</NavLink>
    </li>
  </ul>
</div>

        {/* Right Section */}
        <div className="md:w-1/3">
          <p className="text-lg font-semibold mb-3">Get In Touch</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📞 +91 9382220222</li>
            <li>📧 srkarsujoy715@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 MediMate. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
