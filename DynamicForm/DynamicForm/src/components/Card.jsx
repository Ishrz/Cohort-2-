function Card({elem,index,removeFormData}){
    let {name, profession,image,info}={...elem}
    return(
        <>
        <div className="card bg-zinc-600 w-50 flex flex-col items-center justify-center gap-1 p-3 rounded-2xl ">
            <div className="img-con w-20 h-20 bg-amber-300 rounded-full overflow-hidden  " >
                <img className="w-full h-full object-cover" src={image} />
            </div>
            <h1 className="text-xl font-bold">{name}</h1>
            <h4 className="text-lg font-medium">{profession}</h4>
            <p className="break-all">{info}</p>
            <button onClick={()=>removeFormData(index)} className="px-2 py-1.5 bg-red-500 rounded-2xl text-center active:scale-75 hover:bg-red-950 hover:text-white">Remove</button>
        </div>
        </>
    )
}
export default Card