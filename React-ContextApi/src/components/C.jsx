import React from 'react'
import { useMyContext } from '../MyContext'

const C = () => {

    let {count}=useMyContext()

  return (
    <div className='bg-emerald-400 p-5'>
      <h1>C</h1>
         <p className='bg-red-600 flex justify-center'>{count}</p>     
    </div>
  )
}

export default C
