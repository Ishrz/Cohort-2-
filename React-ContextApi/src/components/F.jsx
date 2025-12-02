import { useMyContext } from "../MyContext";

const F = () => {

    let {setCount}=useMyContext()

  return (
    <div className='bg-green-300 p-5'>
      <h1>F
      </h1>
      <button onClick={()=>setCount((prev)=> prev+1)} className='bg-red-600 rounded-2xl px-5 hover:bg-red-950 active:scale-90 hover:scale-105 transition-all duration-300 flex justify-center text-wrap'>SetCount</button> 
       
    </div>
  );
};

export default F;
