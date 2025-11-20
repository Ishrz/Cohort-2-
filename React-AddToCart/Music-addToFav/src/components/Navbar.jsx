 function Navbar({data}){
    // console.log(data)
    return(
        <>
        <div className="font-mono w-full bg-sky-300 px-8 py-3 flex justify-between items-center shadow-2xl ">
            <h1 className="font-bold font-mono">Fav8 List</h1>
            <div className="nav2 bg-sky-400 flex gap-2 p-1.5 rounded-2xl">
                <h1>Favorite : </h1>
                <h1>{(data.filter((elem)=> elem.added )).length}</h1>
            </div>
        </div>
        </>
    )
}

export default Navbar