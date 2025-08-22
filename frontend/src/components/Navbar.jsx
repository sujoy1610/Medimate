import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {

    const navigate = useNavigate();

    const {token,setToken} = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false)

    const logout =()=>{
        setToken('false')
        localStorage.removeItem('token')
    }
   

    return (
        <div className="flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400">
            <img onClick={() => navigate('/')} src={assets.logo} alt="" className="w-16 h-16 object-contain cursor-pointer" />
            <ul className="hidden md:flex items-start gap-8 font-medium">
                <NavLink to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                            : "text-gray-600 hover:text-blue-600"
                    }>
                    <li className="cursor-pointer transition duration-200">Home</li>
                    <hr />
                </NavLink>

                <NavLink to="/doctors"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                            : "text-gray-600 hover:text-blue-600"
                    }>
                    <li className="cursor-pointer transition duration-200">All Doctors</li>
                    <hr />
                </NavLink>

                <NavLink to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                            : "text-gray-600 hover:text-blue-600"
                    }>
                    <li className="cursor-pointer transition duration-200">About</li>
                    <hr />
                </NavLink>

                <NavLink to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                            : "text-gray-600 hover:text-blue-600"
                    }>
                    <li className="cursor-pointer transition duration-200">Contact</li>
                    <hr />
                </NavLink>
            </ul>
            <div className="flex items-center gap-4 ">
                {
                    token ?
                        <div className="flex items-center gap-2 cursor-pointer group relative">
                            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
                            <img className="w-2.5" src={assets.dropdown_icon} alt="" srcset="" />
                            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
                                <div className="min-w-48 bg-stone-100 flex flex-col gap-4 p-4">
                                    <p onClick={() => navigate('my-profile')} className="hover:text-black cursor-pointer">My profile</p>
                                    <p onClick={() => navigate('my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                                    <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate('/login')} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition duration-300 hidden md:block ">Create account</button>
                }

                <img onClick={() => setShowMenu(true)} src={assets.menu_icon} alt="" className="w-6 md:hidden" />

                {/* mobile menu */}
                <div
                    className={`${showMenu ? 'fixed top-0 right-0 bottom-0 w-full h-full' : 'w-0 h-0'
                        } md:hidden z-50 bg-white overflow-hidden transition-all duration-300`}
                >
                    <div className="flex flex-col h-full px-6 py-4">
                        {/* Top Bar */}
                        <div className="flex justify-between items-center mb-6">
                            <img src={assets.logo} alt="Logo" className="h-10" />
                            <img
                                src={assets.cross_icon}
                                alt="Close"
                                className="h-6 w-6 cursor-pointer"
                                onClick={() => setShowMenu(false)}
                            />
                        </div>

                        {/* Navigation */}
                        <ul className="flex flex-col gap-6 text-lg mt-5 px-5 font-medium">
                            <NavLink to="/" onClick={() => setShowMenu(false)} className="bg-gradient-to-r from-red-500 to-cyan-500 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">Home</NavLink>
                            <NavLink to="/doctors" onClick={() => setShowMenu(false)} className="bg-gradient-to-r from-red-500 to-cyan-500 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">All Doctors</NavLink>
                            <NavLink to="/about" onClick={() => setShowMenu(false)} className="bg-gradient-to-r from-red-500 to-cyan-500 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">About</NavLink>
                            <NavLink to="/contact" onClick={() => setShowMenu(false)} className="bg-gradient-to-r from-red-500 to-cyan-500 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">Contact</NavLink>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar
