import React from 'react'

function Button({count,colorRecieve}) {
    // console.log(count)
    // let clicked=(item)=>{
    //   console.log(item)
    // }



  return (
    <div className=' text-black text-xl '>
      {count.map((item=>( 

        <button onClick={()=>colorRecieve(item)} key={item} style={
            {backgroundColor:item}
        }>
          {item.toUpperCase()}
        </button>)

     ) )}
    </div>
  )
}

export default Button
