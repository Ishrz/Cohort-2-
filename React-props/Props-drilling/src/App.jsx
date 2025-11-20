import './App.css'
import React, { useState } from "react"
import Cards from "./components/Cards"

function App(){

  let user=[ 
    {name:"user1", para:"abcdefgh" ,friend:false},
    {name:"user2", para:"ijklmno" ,friend:false},
    {name:"user3", para:"pqrstuvwx",friend:false}]

  let [state,setState]=useState(user)

  function st(){
      setState((prev)=>{

        return prev.map((elem,index)=>{
          if(index === 1){
            elem= {...elem, friend:!elem.friend}
          }
          return elem;
        } )
      } )
    console.log(state);
  }

  return(
    <>
    <div className='flex flex-wrap'>
    {state.map((elem,key)=> <Cards key={key} values={elem} fncSend={st} /> )}
    </div>
    </>
  )
}

export default App