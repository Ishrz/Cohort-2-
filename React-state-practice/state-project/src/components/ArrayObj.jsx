import React, { useState } from "react"

function ArrayObj(){
    let arr=[{name:"honda", year: 2000},{name:"Hero", year: 2005},{name:"Suzuki", year: 2010}]
    let [state, setState ]= useState(arr)

    return(
        <>
        <div className='w-full h-screen bg-green-900 flex flex-col justify-center items-center gap-5 p-4'>
        
        {state.map((val)=>
            <div>
             <h1 className="bg-sky-400">{val.name}</h1> 
             <h1 className="bg-sky-400">{val.year}</h1> 
            </div>
        )}

        <button onClick={()=> setState(()=> state.map(elem=> elem.name === "Hero" ? ({name:"Hero",year:2025}) : elem ) )} className="p-4 rounded-2xl bg-sky-400 active:bg-sky-950">Click</button>


        </div>


        </>
    )
}

export default ArrayObj