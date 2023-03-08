import React, { useState } from 'react'
import Header from '../components/Header'
import supabase from '../config/supabaseClient'
import { useNavigate } from 'react-router-dom'



const LogginUser = () => {
  const navigate = useNavigate();
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [error,setError] = useState("")

const loginuser = async(e) => {
  e.preventDefault();
  const {data:{user}, error} = await supabase.auth.signInWithPassword({
    email:email,
    password:password
  })
  if (error){
    setError(error.message)
    return;
  }
  if (user){
    console.log(user);
    return navigate("/dashbaord")
  }
  

}
  return (
    <div>
    <Header />
    <div className='flex justify-center'>
    <form className='bg-white mt-4 p-3 w-[550px] rounded-md' onSubmit={loginuser}>
          <h2 className='text-center text-2xl font-bold text-gray-800 capitalize'>Loggin user</h2>
          
            {error && 
            <div className='bg-red-600 text-white w-full p-3 rounded-md mt-4'>
              <p>{error}</p>
            </div>}
       
          <div className='mt-3'>
              <input 
               type="email"
               className='bg-gray-500 p-2 rounded-md w-full outline-0 text-white' 
               placeholder='Enter Your Email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
          </div>
          <div className='mt-3'>
              <input 
              type="password" 
              className='bg-gray-500 p-2 rounded-md w-full outline-0 text-white' 
              placeholder='Enter Your Password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              />
          </div>
          <div className='mt-3'>
            <button 
            type='submit'
            className='bg-blue-500 text-white p-2 text-xl rounded-md w-full text-center font-semibold disabled:opacity-40'
            disabled={!email || !password}
            >Register
            </button>
          </div>
        </form>
    </div>
</div>
  )
}

export default LogginUser