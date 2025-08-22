import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const {backendUrl, token, setToken } = useContext(AppContext )
  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log({ name, email, password, state });

    // Handle API call or Firebase auth here

    try {
      
      if (state === 'Sign Up') {

        const{data} = await axios.post(`${backendUrl}/api/user/register`, { name, password, email })
        if(data.success){
          localStorage.setItem('token', data.token)
          setToken(data.token)
        }else{
           toast.error(data.message);
        }
        
      }
      else{
          const{data} = await axios.post(`${backendUrl}/api/user/login`, { password, email })
        if(data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }else{
          toast.error(data.message);
        }
        
      

      }
    } catch (error) {
       toast.error(error.message);
    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }

  },[token])

  return (
    <form 
      className="min-h-[80vh] flex items-center justify-center bg-blue-50 px-4"
      onSubmit={onSubmitHandler}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-700">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-sm text-center text-gray-600">
          Please {state === 'Sign Up' ? 'sign up' : 'login'} to book an appointment
        </p>

        {state === 'Sign Up' && (
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-blue-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type='submit'
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

{
  state === "Sign Up"
  ?<p>Alredy Have an Account? <span onClick={()=>setState('Login')} className="text-blue-700 cursor-pointer">Login Here</span></p>
  :<p>Create an new account? <span onClick={()=>setState('Sign Up')} className="text-blue-700 cursor-pointer">Click Here</span></p>
}

        {/* <p className="text-sm text-center text-gray-600">
          {state === 'Sign Up' ? 'Already have an account?' : 'Don’t have an account?'}{' '}
          <span
            className="text-blue-600 hover:underline cursor-pointer font-medium"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? 'Login here' : 'Create one'}
          </span>
        </p> */}
      </div>
    </form>
  );
};

export default Login;
