import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-20 px-6 bg-gradient-to-b from-gray-50 to-white text-gray-800" id="speciality">
  {/* Heading */}
  <h1 className="text-4xl font-bold tracking-tight text-gray-900">Find by Speciality</h1>
  <p className="sm:w-2/3 md:w-1/2 text-center text-gray-600 text-base">
    Browse through our trusted doctors by speciality and schedule your appointment hassle-free.
  </p>

  {/* Speciality Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-8 w-full max-w-6xl">
    {specialityData.map((item, index) => (
      <Link
        onClick={() => scrollTo(0, 0)}
        key={index}
        to={`/doctors/${item.speciality}`}
        className="flex flex-col items-center justify-center p-5 rounded-2xl bg-blue-500 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2 cursor-pointer"
      >
        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
          <img src={item.image} alt={item.speciality} className="w-10 h-10 object-contain" />
        </div>
        <p className="text-sm font-medium text-gray-700">{item.speciality}</p>
      </Link>
    ))}
  </div>
</div>

  )
}

export default SpecialityMenu
