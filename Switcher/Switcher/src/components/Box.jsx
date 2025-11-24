import React from 'react'

function Box({currentC}) {
  return (
    <div>
        <div className={`w-40 h-40 bg-red-300 text-3xl text-center content-center m-4 text-black`} style={{ backgroundColor:currentC}}> 
          {currentC.toUpperCase()}
        </div>
      
    </div>
  )
}

export default Box
