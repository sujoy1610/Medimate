import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  const specialities = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="px-6 md:px-10 lg:px-20 py-10">
      <p className="text-xl font-semibold text-blue-800 mb-6">
        Explore doctors by their medical specialities
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Sidebar */}
        <div className="md:w-1/4 bg-blue-50 p-4 rounded-lg shadow-sm">
          <p className="text-lg font-medium mb-4 text-blue-600">Specialities</p>
          <div className="flex md:flex-col flex-wrap gap-3">
            {specialities.map((name, idx) => (
              <p
                key={idx}
                onClick={() => navigate(`/doctors/${name}`)}
                className={`px-4 py-2 rounded-md cursor-pointer border transition-all duration-200 ${
                  name === speciality
                    ? 'bg-blue-100 text-blue-700 border-blue-500 font-semibold'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {name}
              </p>
            ))}
          </div>
        </div>

        {/* Doctors List */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-400 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                <img className="w-full h-40 object-cover bg-blue-100" src={item.image} alt={item.name} />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-green-500 mb-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Available</span>
                  </div>
                  <p className="text-gray-800 text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No doctors found for this speciality.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
