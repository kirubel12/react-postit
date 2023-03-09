import React, { useState } from 'react'
import supabase from '../config/supabaseClient'


function Header() {
  const [user,setUser] = useState("")
  const signGithub = async() => {
    const {data,error} = await supabase.auth.signInWithOAuth({
      provider: "github"
    })
    
    
  
  }
  
  return (
    <nav className='bg-white p-3'>
        <ul className='flex justify-between'>
            <li>
                <a href="/" className='text-2xl font-bold text-gray-700'>Postit</a>
            </li>
            <div className='flex justify-end space-x-6'>
          <li>
            <a href="#" onClick={signGithub} className='bg-gray-800 text-white p-3 rounded-md px-3 py-2 font-semibold'>Sign In with Github</a>
          </li>
          
            <li>
              <a href="#">Logout</a>
            </li>
            <li>
                <a href="/dashbaord" className='bg-gray-700 text-white px-3 py-2 rounded-md'>Dashbaord</a>
            </li>
            </div>
        </ul>
    </nav>
  )
}

export default Header