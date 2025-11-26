import React from 'react'

const Button = ({op,btn}) => {


    // console.log(val)
  return (
    <div className=' flex gap-3 items-center justify-center  '>
      {op.map((elem,index)=>{
        return <button onClick={()=>btn(true,elem)} key={index} className={`${elem==="Remove"? "bg-red-600":"bg-green-500"}`}>{elem}</button>
      })}
    </div>
  )
}

export default Button
