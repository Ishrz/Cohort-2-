import React, { useState } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'
function Data() {
        const [state , setState ] = useState([])
        
        // console.dir(temp)

        let fetchFnc= async ()=>{
            let data=await axios('https://dummyjson.com/users')
            // console.log(data);
           
                let temp= data.data.users
                setState(temp)
                
            
        }

        let clearFnc=()=>{
            setState([])
        }

    return (
    <div className='w-full h-fit   bg-green-200 '>
        <button className='bg-green-500 px-4 hover:bg-green-600 text-center active:scale-90  rounded-2xl' onClick={fetchFnc}>Fetch</button>
        <button className='bg-red-500 px-4 hover:bg-red-600 text-center active:scale-90  rounded-2xl mx-4' onClick={clearFnc}>clear</button>
        {state.map( val =>{
        
        return <div className='w-full bg-green-100 p-2 mt-4 text-lg font-bold'>
        <h2>First Name: {val.firstName}</h2>
        <h2>Last Name:{val.lastName} </h2>
        <h3>Role :{val.role}</h3>
        <h5>Email:{val.email} </h5>
        <h5>Phone:{val.phone} </h5>
        </div>
        } )}

        
    </div>
  )
}

export default Data
