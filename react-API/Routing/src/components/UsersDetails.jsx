import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

function UsersDetails() {
const {name}=useParams();
const navigate=useNavigate();

let HandleClick=()=>{
    // navigate(-1);
    navigate('/users')
}


  return (
    <>
    <div className='flex flex-col items-center justify-center gap-5 mt-10 m-1 '>
      <h1>HElllloooo {name}</h1>
      <button onClick={HandleClick} className='hover:bg-red-600 active:scale-95 px-3 py-2 bg-red-500 rounded-2xl'>GO back</button>
    </div>
    <hr/>
   
    </>
  )
}

export default UsersDetails
