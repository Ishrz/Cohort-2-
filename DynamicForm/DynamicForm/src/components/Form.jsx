import { useForm } from 'react-hook-form'
import React from 'react'
function Form({formData}){

//    let {register, handleSubmit} = useForm()
   let {register,handleSubmit,reset}= useForm()

   let submitted= data=>{
    formData(data)
    reset();
   }


    return(
        <>
        <div className='m-auto w-fit '>
        <form onSubmit={ handleSubmit(submitted)} className=' mt-4 bg-zinc-500 p-4 flex justify-center items-center gap-4 rounded-2xl' action="">
            <input {...register("name")} className="rounded-2xl px-2 py-1 bg-white" type="text" placeholder="name"/>
            <input {...register("profession")} className="rounded-2xl px-2 py-1 bg-white" type="text" placeholder="profession"/>
            <input {...register("info")} className=" px-2 py-1 bg-white rounded-2xl" type="text" placeholder="information"/>
            <input {...register("image")} className=" px-2 py-1 bg-white rounded-2xl" type="text" placeholder="image-url"/>
            <input  className=" px-2 py-1.5 bg-red-600 rounded-full active:scale-75 hover:bg-red-800" type="submit"/>
        </form>
        </div>
        
        </>
    )
}

export default Form
