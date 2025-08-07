import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    const { aToken, setAToken } = useContext(AdminContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate("/")
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }
    return (
        <div className="w-full bg-white shadow-md p-4 flex items-center  justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
                <img src={assets.admin_logo} alt="" className="w-10 h-10 object-contain" />
                <p className="text-lg font-semibold text-blue-500">{aToken ? 'Admin' : 'Doctor'}</p>
            </div>
            <button onClick={logout} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Log Out</button>
        </div>
    )
}

export default Navbar
