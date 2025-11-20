import React, { useState } from 'react'
import './App.css'
import Music from './components/Music'
import Navbar from './components/Navbar'

function App(){
    let names=[
        {name:"Lose Yourself", info:"Eminem", image:"https://images.unsplash.com/photo-1724778095377-16f15abdd968?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",added:false},
        {name:"Bulliya", info:"Arijit Singh", image:"https://images.unsplash.com/photo-1557286581-db6c124a6e2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",added:true},
        {name:"I dont Know", info:"Michel Jackson", image:"https://images.unsplash.com/photo-1505100119535-f14893f91436?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",added:false},
        {name:"Water on Mars", info:"Elon Musk", image:"https://images.unsplash.com/photo-1606946274631-d4c6b167808d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",added:false},
        {name:"Mandola", info:"N. Mandela", image:"https://plus.unsplash.com/premium_photo-1681682668747-4cc8cd564886?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",added:false},
        {name:"Blank", info:"404", image:"https://plus.unsplash.com/premium_photo-1681503973682-29cec46571b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",added:false},
    ]

    let [val, setVal] = useState(names)

    let handleClick=(mIndex)=>{
        // console.log(val)
        setVal((prev)=>{
            return prev.map((elem,index)=>{
                if(index === mIndex){
                    return elem={...elem, added : !elem.added }
                }
               return elem;
            } )
        } )
    }
    

    return(
        <>
        <div className='w-full h-screen bg-sky-200'>
        <Navbar data={val} />
        <div className='Music-compo flex w-full flex-wrap px-15 gap-5 mt-10'>
            
            {val.map((val,index)=>{
                return <Music key={index} {...val} index={index} handleClick={handleClick} />
            } )}
            
        </div>
        </div>

        </>
    )
}

export default App