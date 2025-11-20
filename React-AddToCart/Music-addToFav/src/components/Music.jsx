import React from "react"
export default function Music({name,info,image,added,index,handleClick}){
    
    // console.log(index)
    return(
        <>
        <div className="music-card w-65 bg-sky-300 p-2 flex items-center gap-1.5 m-3 rounded-2xl relative" >
            <div className="img-container w-20 h-20 rounded-2xl overflow-hidden">
                <img className="w-full h-full object-cover" src={image}/>
            </div>
            <div className="song-info rounded-1xl ">
                <h1 className="font-bold ">{name}</h1>
                <p>{info}</p>
            </div>
            
        <button className={`text-blue-100 active:scale-110 cursor-pointer hover:scale-90 ${added === false? 'bg-teal-400':'bg-red-500'} absolute px-5 text-center py-1 rounded-2xl bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-sm whitespace-nowrap`} onClick={()=>handleClick(index)} >{(added === false)? 'Add Favorite':'Remove Favorite' }</button>
        </div>
        </>
    )
}