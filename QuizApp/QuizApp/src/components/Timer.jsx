import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer = ({setIsOver}) => {

    const [timer, setTimer]=useState(5)
    const[leftime,setLefttime]=useState()

    useEffect(()=>{
        console.log("hello")
        
       let clearIntv= setInterval(()=>{

        setTimer((prev)=>{
                    console.log("interval run")
                if(prev <= 0){
                    
                    clearInterval(clearIntv)
                   
                    return 0
                } 
                return prev-1  
            })
        },1000)

    return ()=>{return clearInterval(clearIntv)} 
    },[])

    useEffect(()=>{
      (!timer &&  setIsOver(true))
       let temp= (`${(Math.floor(timer/60)).toString().padStart(2,0)} : ${(timer%60).toString().padStart(2,0)}`)
       setLefttime((prev)=>{
        return prev=temp;
       })

    },[timer])


  return (
    <div>
      <p>Time Left : {leftime} </p>
    </div>
  )
}

export default Timer
