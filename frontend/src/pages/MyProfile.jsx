import React, { useState } from 'react'
import { assets } from '../assets/assets'
const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Jhon Doe",
    image: assets.profile_pic,
    email: 'jhondoe@gmail.com',
    phone: '+91 1234567891',
    address: {
      line1: "57th cross",
      line2: "circle, bc road,london"
    },
    gender: 'Male',
    dob: '2000-01-10'
  })

  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4">
  <div className="w-full max-w-2xl p-8 rounded-3xl relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_10px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_0_60px_15px_rgba(0,255,255,0.3)] group">

    {/* Floating Glow */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-cyan-500 to-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700"></div>

    {/* Profile Section */}
    <div className="relative z-10 flex flex-col items-center gap-4 text-white">
      <img src={userData.image} alt="Profile" className="w-28 h-28 rounded-full border-4 border-cyan-400 shadow-xl hover:scale-105 transition-all duration-300" />

      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="text-2xl font-bold text-center bg-white/20 p-2 rounded-md w-full outline-none"
        />
      ) : (
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 drop-shadow-md">
          {userData.name}
        </h1>
      )}
    </div>

    {/* Contact Info */}
    <div className="mt-8 space-y-6 text-white relative z-10">
      <div>
        <h2 className="text-xl font-semibold text-cyan-300 mb-1">📩 Email</h2>
        <p>{userData.email}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-cyan-300 mb-1">📞 Phone</h2>
        {isEdit ? (
          <input
            type="text"
            value={userData.phone}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="bg-white/10 p-2 rounded w-full outline-none"
          />
        ) : (
          <p>{userData.phone}</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-cyan-300 mb-1">📍 Address</h2>
        {isEdit ? (
          <>
            <input
              type="text"
              value={userData.address.line1}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
              className="bg-white/10 p-2 rounded w-full outline-none mb-2"
            />
            <input
              type="text"
              value={userData.address.line2}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
              className="bg-white/10 p-2 rounded w-full outline-none"
            />
          </>
        ) : (
          <p>
            {userData.address.line1}
            <br />
            {userData.address.line2}
          </p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-cyan-300 mb-1">👤 Gender</h2>
        {isEdit ? (
          <select
            value={userData.gender}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, gender: e.target.value }))
            }
            className="bg-white/10 p-2 rounded w-full text-black outline-none"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <p>{userData.gender}</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-cyan-300 mb-1">🎂 Birthdate</h2>
        {isEdit ? (
          <input
            type="date"
            value={userData.dob}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, dob: e.target.value }))
            }
            className="bg-white/10 p-2 rounded w-full text-black outline-none"
          />
        ) : (
          <p>{userData.dob}</p>
        )}
      </div>
    </div>

    {/* Button */}
    <div className="relative z-10 mt-10 text-center">
      <button
        onClick={() => setIsEdit(!isEdit)}
        className={`px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300 ${
          isEdit
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white`}
      >
        {isEdit ? '💾 Save' : '✏️ Edit'}
      </button>
    </div>
  </div>
</div>

  )
}

export default MyProfile
