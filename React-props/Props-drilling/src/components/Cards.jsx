import React from "react"


export default function Cards({values,fncSend}){
    let {name, para, friend} =   values
    return(
        <>
        <div className="card-container w-75 h-75  rounded-2xl m-2 bg-zinc-800 overflow-hidden">
        <div className="image-container w-full ">
            <img className="img w-full h-50 obj" src="https://images.unsplash.com/photo-1763321402439-41eb2a0c7e7b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" />
        </div>
        <div className="content p-1 pl-3 text-xl text-white">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="font-light">{para}</p>
        </div>
        <button onClick={fncSend} className="bg-blue-500 rounded-full mx-[40%] px-3 ">Button</button>
        </div>
        </>
    )
}