import './App.css'
import React, { useState } from 'react'
import Array from './components/Array'
import ArrayObj from './components/ArrayObj'
import Statepra from './components/Statepra' 


function App(){
  // let obj={ name: "shaikh", isBanned: false}

  // let [val,setVal]= useState(obj)
  // return(
    // <>
    // <div className='w-full h-screen bg-green-900 flex flex-col justify-center items-center gap-5 p-4'>
    // <h1 className='border-2 w-20 h-20 text-center pt-5 active:scale-90 hover:bg-green-950'>{val.name}</h1>
    
    // {/* <h1 className=' border-2 w-40 h-20 text-center pt-5 active:scale-90 hover:bg-green-950'>is Banned: {val.isBanned.toString()}</h1>
    // <button onClick={()=> setVal({...val,isBanned:!val.isBanned})} className={ `px-2 py-1.5 ${val.isBanned? 'bg-green-400':'bg-red-600'} rounded-full active:scale-90 hover:bg-green-950 active:text-sm` }>Banned it</button>
    // </div> */}
    // <h1 className=' border-2 w-40 h-20 text-center pt-5 active:scale-90 hover:bg-green-950'>is Banned: {val.isBanned.toString()}</h1>
    // <button onClick={()=>{
    //   setVal({...val, gender:"male"});
    //   console.log(val)
    // } } className={ `px-2 py-1.5  rounded-full active:scale-90 hover:bg-green-950 active:text-sm` }>Banned it</button>
    // </div>

  //   </>
  // )



  // let [val,setVal] = useState({ name: "shaikh", isBanned: false})
  // return(
  //   <>
  //   <button onClick={()=>{
  //     setVal({...val, gender:"male"})
  //     console.log(val);
  //   }} className='p-4 bg-amber-300 m-2'>Button</button>
  //   </>
  // )


              //now Array from other component:Array


  return(
    <>
      {/* <Array/>   */}
      {/* <ArrayObj/> */}
          {/* <Array/> */}
          <Statepra/>
    </>
  )
}

export default App