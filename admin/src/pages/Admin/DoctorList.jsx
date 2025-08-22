import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {

  const { doctors, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Doctors
      </h1>

      <div className="w-full flex flex-wrap gap-6 justify-center">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border border-indigo-200 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-64 cursor-pointer group"
          >
            {/* Doctor Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 group-hover:scale-105 transition-transform duration-300"
            />

            {/* Doctor Info */}
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-gray-700">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>

            {/* Availability */}
            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                checked={item.available}
              />
              <p>Available</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>


  )
}

export default DoctorList
