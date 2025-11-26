import { useState } from 'react'
import quetions from './quetions.json'
const Quetions = ({setIsOver, scoreUpdate, currentScore,}) => {
    const [currentIndex,setCurrentIndex]=useState(0)
   

    let nextIndex=(elem)=>{
        if(elem === quetions[currentIndex].answer){
            scoreUpdate(prev=> prev+1)
            // console.log(currentScore)
        }
        if(currentIndex< quetions.length-1){
            setCurrentIndex((prev)=> prev+1)
            
        }
        else{
            setIsOver(true)
            
        }
    }
    


  return (
    
    <div>
      <div className=' flex flex-col gap-3 mt-5'>
        <h2 className='text-green-500'> Points : {currentScore}</h2>
        <h2>
           {quetions[currentIndex].question}
        </h2>

        {quetions[currentIndex].options.map((elem,index)=>{
            return <button key={index} onClick={()=>nextIndex(elem)} className='border-none'>{elem}</button>
        })}

      </div>
    </div>
  )
}

export default Quetions

