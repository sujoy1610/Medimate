import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)
  return (
    <div className="min-h-screen bg-blue-500 border-r w-37">
      {
        aToken && <ul className="text-white">
            <NavLink to={'/admin-dashboard'} className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded">
                <img src={assets.home_icon} alt="" className="w-5 h-5"/>
                <p>Dashboard</p>
            </NavLink>

            <NavLink to={'/all-appointments'}className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded">
                <img src={assets.appointment_icon} alt="" className="w-5 h-5"/>
                <p>Appointment</p>
            </NavLink>

             <NavLink to={'/add-doctor'}className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded">
                <img src={assets.add_icon} alt="" className="w-5 h-5"/>
                <p>Add Doctor</p>
            </NavLink>

             <NavLink to={'/doctor-list'}className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded">
                <img src={assets.people_icon} alt="" className="w-5 h-5"/>
                <p>Doctor List</p>
            </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar
