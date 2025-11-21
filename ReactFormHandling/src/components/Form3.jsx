import React, { useRef, useState } from 'react'
import {useForm} from 'react-hook-form'
function Form3() {


  let {register,handleSubmit}=useForm()

  return (
   <div className='container'>
        <form onSubmit={handleSubmit(evt=>console.log(evt))}>
            <input {...register('name')} type='name' placeholder='Name' ></input>
            <input {...register('age')} type='age' placeholder='Age'></input>
            <input type='submit'></input>
        </form>
        

      
    </div>
  )
}

export default Form3
