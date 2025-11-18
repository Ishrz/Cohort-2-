import { useState } from "react"
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
export default function Statepra(){

let [state,setState] = useState(false)


    return(
        <>
        <div className='w-full h-screen bg-sky-200 flex justify-center items-center gap-5 p-4'>

            <div className="img-container relative w-58 h-40 bg-blue-500 rounded-3xl flex overflow-hidden ">
               
                <img className={`w-full h-full object-cover shrink-0 ${!state? "-translate-x-[0%]": "-translate-x-[100%]" } transition-transform duration-300  `} src="https://plus.unsplash.com/premium_photo-1661962394624-ebba47063dbe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                <img className={`w-full h-full object-cover shrink-0 ${!state? "-translate-x-[0%]": "-translate-x-[100%]" } transition-transform duration-300 `} src="https://plus.unsplash.com/premium_photo-1694475581113-c704ffa3b495?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                <span onClick={()=>setState(()=> !state) } className="absolute active:scale-75 transition-shadow bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%] w-10 h-10 bg-[#8abbdbb9] flex justify-center items-center rounded-full ">
                <AiOutlineArrowRight size={'0.9em'} />
                </span>
            </div>


      

        </div>
        </>
    )
}