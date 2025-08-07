import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className="min-h-screen overflow-auto px-4 sm:px-10 py-10 bg-white">
      <p className="pb-6 text-2xl font-semibold text-blue-700">My-Appointment</p>

      <div className="space-y-6">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-start gap-6 py-6 px-4 sm:px-8 border-b border-gray-200 bg-blue-50 hover:shadow-md rounded-xl transition duration-200"
          >
            {/* Doctor Image Box with bg-blue-500 */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-blue-500 rounded-lg shadow-md flex items-center justify-center mx-auto sm:mx-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-gray-700 text-sm sm:text-base">
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-blue-600 font-medium">{item.speciality}</p>

              <div className="mt-2">
                <p className="font-semibold">Address:</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
              </div>

              <p className="pt-2">
                <span className="font-semibold text-gray-800">Date & Time:</span>{' '}
                25, June, 2025 | 10:13 PM
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 mt-4 sm:mt-0 w-full sm:w-auto sm:justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow w-full sm:w-auto">
                Pay Online
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow w-full sm:w-auto">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
