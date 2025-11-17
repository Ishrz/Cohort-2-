function Cards({ title }) {
  // let arr=[
  //     {
  //         name: "iphone",
  //         desc:"iPhone 16 pro max flana dhimka,,,,",
  //         img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     },
  //     {
  //         name: "Blackberry",
  //         desc:"Blackberry pro max flana dhimka,,,,",
  //         img:"https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     },
  //     {
  //         name: "OnePlus",
  //         desc:"Oneplus 10 pro max flana dhimka,,,,",
  //         img:"https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     },
  //     {
  //         name: "Samsung",
  //         desc:"Samsung galaxy flip max flana dhimka,,,,",
  //         img:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     },
  // ]



  return (
    <>
      {title.map((val, index) => (
        <div key={index} className="w-52 bg-zinc-500 flex flex-col rounded rounded-lg overflow-hidden">
          <div className="image-container w-full h-42 bg-rose-200">
            <img className="w-full h-full object-cover" src={val.img}></img>
          </div>
          <div className="content bg-zinc-700 p-2 w-full h-full">
            <h1 className="text-xl font-bold p-1">{val.name}</h1>
            <p className="text-md font-thin p-1">{val.desc}</p>



            <button onClick={ ()=>(
              alert("btn clicked")
            ) } className={ `${val.stock? "bg-sky-500":"bg-red-500"} px-2.5 py-1.5 rounded-xl active:scale-95 cursor-pointer` } >
                {val.stock ? "in-stock": "outof-stock"}
            </button>
            
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
