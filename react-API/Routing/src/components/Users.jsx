import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Data from './Data'

function Users() {
  return (
    <>
    
    <div className='bg-green-200 p-4 m-auto h-screen w-full flex-col flex gap-2'>
     <Link to="/users/Alex" className='bg-red-400 w-1/2 px-4 p-3 rounded-lg hover:bg-red-600'>Alex</Link>

     <Link to="/users/Peter" className='bg-red-400 w-1/2 px-4 p-3 rounded-lg hover:bg-red-600'>Peter</Link>

     <Link to="/users/John" className='bg-red-400 w-1/2 px-4 p-3 rounded-lg hover:bg-red-600'> John</Link>
     <span className='bg-red-300 items-start my-10'>

    <Outlet />
     </span>
     <hr/>
     <p> For Other Users</p>
     <Data/>
   </div>


    
    
    </>
 )
}

export default Users
