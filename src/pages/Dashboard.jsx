import { data } from 'autoprefixer'
import React from 'react'
import Header from '../components/Header'
import supabase from '../config/supabaseClient'
const Dashboard = () => {
  const fetchUser = async() => {
    const {data:{user}, error } = await supabase.auth.getUser()
    if (user){
      console.log(user)
    }else{
      console.log("No user found")
    }
  }
  return (
   
    <div>
        <Header />
        <div className='flex justify-center'>
            <h2>Dashbaord</h2>
        </div>
    </div>
  )
}

export default Dashboard