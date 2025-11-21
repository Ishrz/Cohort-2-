import React, { useState } from 'react'

function Form2() {
    //form handling by Controlled component
    //isme jobhi type karte hai field me wo realtime me store karte hai useState me...
    //element par onchange event se value nikalte hai jo change ho rhe hai aur usko setState se state me store kar dete hai.


    let [state ,setState ]= useState({name:"",age:""})

    let handleSubmit=evt=>{
        evt.preventDefault()
        console.log(state)
  
        
        
    }
   
    
    
    
    

  return (
    
      <div className='container'>
        <form onSubmit={handleSubmit}>
            <input onChange={(evt)=>setState({...state,name:evt.target.value }) } type='text' placeholder='Name' ></input>
            <input onChange={(evt)=>setState({...state,age:evt.target.value})} type='age' placeholder='Age'></input>
            <input type='submit'></input>
        </form>

      
    </div>
    
  )
}

export default Form2
