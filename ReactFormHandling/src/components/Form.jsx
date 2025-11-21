import React, { useRef } from 'react'

function Form() {

//Using useRef, by selecting each html element and gettinf its value through current.value same as queryselector

    let name =useRef(null);
    let age =useRef(null);



let handleSubmit= evt=>{
    evt.preventDefault();
    console.log(name.current.value)
        console.log(age.current.value)

}


  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <input ref={name} type='text' placeholder='Name' ></input>
            <input ref={age} type='age' placeholder='Age'></input>
            <input type='submit'></input>
        </form>

      
    </div>
  )
}

export default Form
