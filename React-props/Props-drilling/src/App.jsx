import './App.css'
import React, { useState } from "react"
import Cards from "./components/Cards"

function App(){

  let user=[ 
    {name:"user1", para:"abcdefgh" ,friend:false},
    {name:"user2", para:"ijklmno" ,friend:false},
    {name:"user3", para:"pqrstuvwx",friend:false}]

  let [state,setState]=useState(user)

  function st(cardIndex){
      setState((prev)=>{

        return prev.map((elem,index)=>{
          if(index === cardIndex){
            elem= {...elem, friend:!elem.friend}
          }
          return elem;
        })
      } )
  }
  // console.log(state);

  return(
    <>
    <div className='flex flex-wrap'>
    {state.map((elem,index)=> <Cards key={index} values={elem} index={index} fncSend={st} /> )}
    </div>
    </>
  )
}

export default App