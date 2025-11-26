import React, { useState } from 'react'
import { MdOutlineMenuOpen } from "react-icons/md";
const Navbar = () => {

  const[mobileView, setMobileView]=useState(false)

  return (
    <div className='nav-container gap-2 p-4 text-lg font-mono w-full h-12 bg-red-400 flex items-center justify-between'>
      <h1 className='font-bold '>Logo</h1>

      <div className='flex items-center gap-4 max-[600px]:hidden '>
        <a>Home</a>
        <a>Catloge</a>
        <a>Menu</a>
        <a>About</a>
        <a>Contact</a>
      </div>
      <div className='flex gap-3 items-center'>
        <h1>🛒</h1>
        <h1>🧾</h1>
        <MdOutlineMenuOpen onClick={()=> setMobileView((prev)=> !prev)} className='text-4xl min-[600px]:hidden '/>
      </div>



      {mobileView && <div className={`flex flex-col items-center gap-0.2 absolute bg-[#572121f8] w-[50vw] h-full top-0 left-0  ${mobileView? "translate-x-[0%]": "-translate-x-full"} transition-all delay-400 min-[600px]:hidden   `}>
        <a className=' text-white w-full h-14 items-center justify-center flex'>Home</a>
        <a className=' text-white w-full h-14 items-center justify-center flex'> Catloge</a>
        <a className=' text-white w-full h-14 items-center justify-center flex'>Menu</a>
        <a className=' text-white w-full h-14 items-center justify-center flex'>About</a>
        <a className=' text-white w-full h-14 items-center justify-center flex'>Contact</a>
      </div>}


    </div>



  )
}

export default Navbar
