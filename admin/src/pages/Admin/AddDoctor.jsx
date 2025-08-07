import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import {toast} from 'react-toastify'
import axios from 'axios'
const AddDoctor = () => {


  const [docImg,setDocImg] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [experience,setExperience] = useState('1 year')
  const [fees,setFees] = useState('')
  const [about,setAbout] = useState('')
  const [speciality,setSpeciality] = useState('General Physician')
  const [degree,setDegree] = useState('') 
  const [address1,setAddress1] = useState('')
  const [address2,setAddress2] = useState('')


  const {backendURL, aToken} = useContext(AdminContext)

  const onSubmitHandler= async (event) => {
    event.preventDefault()
    try {
      if (!docImg) {
        return toast.error('Image Not Selected') 
        
      }

      const formData = new FormData()
      
      formData.append('image',docImg)
      formData.append('name',name)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('experience',experience)
      formData.append('fees',Number(fees))
      formData.append('about',about)
      formData.append('speciality',speciality)
      formData.append('degree',degree)
      formData.append('address',JSON.stringify({line1:address1,line2:address2}))

      //  console.log(formData);
      formData.forEach((value,key)=>{
        console.log(`${key} : ${value}`);
        

      })

      const {data} = await axios.post(backendURL + '/api/admin/add-doctor',formData, {headers:{aToken}})

       if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAbout('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setFees('')

       }
       else{
        toast.error(data.message)
       }
    } catch (error) {
      toast.error(error.message)
      console.log(error);
      
    }
  }


  return (
   <form onSubmit={onSubmitHandler} className="max-w-4xl mx-auto my-5 p-6 bg-white rounded-lg shadow-md space-y-6">
  <p className="text-2xl font-semibold text-center">Add Doctor</p>

  <div className="flex flex-col gap-6 md:flex-row">
    {/* Left section */}
    <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
      <label htmlFor="doc-img" className="cursor-pointer">
        <img src={docImg? URL.createObjectURL(docImg): assets.upload_area} alt="Upload" className="w-32 h-32 object-cover rounded-full border-2 border-dashed border-gray-400 p-2" />
      </label>
      <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
      <p className="text-sm text-gray-500">Upload Doctor Picture</p>
    </div>

    {/* Right section */}
    <div className="w-full md:w-2/3 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium">Doctor Name</p>
          <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder="Name" required className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
        </div>

        <div>
          <p className="text-sm font-medium">Doctor Email</p>
          <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
        </div>

        <div>
          <p className="text-sm font-medium">Doctor Password</p>
          <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
        </div>

        <div>
          <p className="text-sm font-medium">Experience</p>
          <select onChange={(e)=> setExperience(e.target.value)} value={experience} required className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">
            {["1","2","3","4","5","6","7","8","9","10"].map((year) => (
              <option key={year} value={`${year} year`}>{year} year</option>
            ))}
          </select>
        </div>

        <div>
          <p className="text-sm font-medium">Fees</p>
          <input onChange={(e)=> setFees(e.target.value)} value={fees} type="number" placeholder="Fee" required className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
        </div>

        <div>
          <p className="text-sm font-medium">Speciality</p>
          <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} required className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">
            <option value="General physician">General physician</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatricians">Pediatricians</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
          </select>
        </div>

        <div>
          <p className="text-sm font-medium">Education</p>
          <input onChange={(e)=> setDegree(e.target.value)} value={degree} type="text" placeholder="Education" required className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
        </div>

        <div>
          <p className="text-sm font-medium">Address</p>
          <input onChange={(e)=> setAddress1(e.target.value)} value={address1} type="text" placeholder="Address 1" required className="w-full mt-1 px-3 py-2 border rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-200" />
          <input onChange={(e)=> setAddress2(e.target.value)} value={address2} type="text" placeholder="Address 2" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
        </div>
      </div>
    </div>
  </div>

  <div>
    <p className="text-sm font-medium mb-1">About Doctor</p>
    <textarea onChange={(e)=> setAbout(e.target.value)} value={about} placeholder="Write About Doctor" rows={5} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 overflow-hidden" />
  </div>

  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
    Add Doctor
  </button>
</form>

  )
}

export default AddDoctor
