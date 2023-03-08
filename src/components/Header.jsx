import React from 'react'

function Header() {
  return (
    <nav className='bg-white p-3'>
        <ul className='flex justify-between'>
            <li>
                <a href="/" className='text-2xl font-bold text-gray-700'>Postit</a>
            </li>
            <div className='flex justify-end space-x-6'>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/login">Login</a>
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