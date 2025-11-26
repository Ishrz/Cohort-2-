import React from 'react'

const RemoveEdit = ({se,naam}) => {
  return (
    <div className='absolute w-screen h-screen top-0 left-0 flex items-center justify-center'>

    <div className='bg-gray-700 w-86 h-66 rounded-xl flex flex-col items-center justify-center gap-4 p-4   '>
      <h2 className='text-2xl'>⚠ {naam}</h2>
      <h2>Are You Sure You Want to {naam} This</h2>
      <div className='flex gap-4'>
      <button className='bg-red-600'>Yes</button> 
      <button className='bg-green-500'>No</button>
      </div>
    </div>
    <button onClick={()=>se(false)} className='cancelBtn bg-red-600 absolute top-[8%] right-[8%]   '>X</button>
    </div>


  )
}

export default RemoveEdit
