import React, { useContext, useState } from 'react'

import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {

    const [state, setState] = useState('admin')
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const{setAToken,backendURL} = useContext(AdminContext)

const onSubmitHandler = async(event)=>{
    event.preventDefault()

    try {
        if (state==='admin') {
            const {data}= await axios.post(backendURL + '/api/admin/login',{email,password})
            if(data.success){
                localStorage.setItem('aToken',data.token)
                setAToken(data.token)
             
                
            }else{
                toast.error(data.message)
            }
        }else{

        }
    } catch (error) {
        
    }
}
    return (
        <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">
                    <span className="uppercase tracking-wide">{state}</span> Login
                </h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email}
                        type="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input  onChange={(e)=>setPassword(e.target.value)} value={password}
                        type="password"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all"
                >
                    Login
                </button>
                {
                    state === 'Admin'
                        ? <p>Doctor Login? <span className="text-blue-500 underline cursor-pointer" onClick={() => setState('Doctor')}>Click Here</span></p>
                        : <p>Admin Login? <span className="text-blue-500 underline cursor-pointer" onClick={() => setState('Admin')}>Click Here</span></p>
                }
            </div>
        </form>


    )
}

export default Login
