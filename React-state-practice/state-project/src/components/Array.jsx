import React, { useState } from "react"
function Array(){

    let [val, setVal]=useState([6,5,7,8,9])

    // return(
    //     <>
    //      <div className='w-full h-screen bg-green-900 flex flex-col justify-center items-center gap-5 p-4'>

    //     {val.map((elem,index)=> <h1 key={index} className="text-2xl">{elem}</h1>)}
    //     <button onClick={()=> setVal( ()=> val.filter((elem,index)=>index != val.length-1 ) )} className="px-2 py-1.5 bg-sky-400 rounded-full active:scale-90 hover:bg-sky-950 active:text-sm">Click</button>
 
    //      </div>
    //     </>
    // )

            //Array remove from between
    
    // return(
    //     <>
    //      <div className='w-full h-screen bg-green-900 flex flex-col justify-center items-center gap-5 p-4'>

    //     {val.map((elem,index)=> <h1 key={index} className="text-2xl">{elem}</h1>)}
    //     <button onClick={ ()=> setVal( ()=> val.filter((elem,index)=> elem%2 !== 0  ))} className="px-2 py-1.5 bg-sky-400 rounded-full active:scale-90 hover:bg-sky-950 active:text-sm">Click</button>
 
    //      </div>
    //     </>
    // )

return(
    <>
        <div className='w-full h-screen bg-green-900 flex flex-col justify-center items-center gap-5 p-4'>

         {val.map((val)=> <h1>{val}</h1> )}

         <button onClick={()=> setVal([...val, 7] )} className="px-2 py-1.5 bg-sky-400 rounded-full active:scale-90 hover:bg-sky-950 active:text-sm">Click</button>
         </div>
    </>
)




}

export default Array