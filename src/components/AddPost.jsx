import React, { useState } from 'react'

const AddPost = () => {
    const [title, setTitle] = useState('')
  return (
    <div className="flex justify-center">
        <div className="bg-white mt-4 w-[600px] rounded-md p-4">
          <form>
           <textarea value={title} onChange={(e) => setTitle(e.target.value)} name='title' className='w-full outline-0 bg-gray-800 p-3 rounded-md text-white resize-none' placeholder='Whats on your mind ?'></textarea>
           <div className='flex justify-between mt-4'>
            <button className='bg-blue-400 text-white px-3 py-2 rounded-md font-bold uppercase'>Create</button>
            <p className={`font-bold text-base ${title.length > 255 ? ' text-red-800' : ''}`}>{title.length}/255</p>
           </div>
          </form>
        </div>
        <p></p>
      </div>
  )
}

export default AddPost