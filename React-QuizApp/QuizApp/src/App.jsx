import Timer from './components/Timer'
import './App.css'
import Quetions from './components/Quetions'
import Result from './components/Result'
import { useState } from 'react'
function App() {
  const[isover,setIsOver]=useState(false)
  const [currentScore,setCurrentScore]=useState(0)

  let scoreUpdate=(scoreData)=>{
    setCurrentScore(scoreData)
  }

  let resetFnc=()=>{
    setCurrentScore(0)
    setIsOver(false)
  }

  return (
    <>
      <div className='w-full'>

        

        {!isover?
        <>
        <Timer setIsOver={setIsOver} /> <Quetions setIsOver={setIsOver} scoreUpdate={scoreUpdate} currentScore={currentScore}  />
        </>
        :
        <> <Result currentScore={currentScore} /> 
        <button onClick={resetFnc} className="text-red-500 m-4">Restart</button>
        </>}
        
        

 

      </div>
    </>
  )
}

export default App
