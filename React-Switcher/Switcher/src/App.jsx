import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import Box from './components/Box'

function App() {
  let arr=["red","blue","yellow","tomato","crimson","cyan"]
  const [count, setCount] = useState(arr)
  const [currentC, setCurrent]=useState('transparent')

  let colorRecieve=(color)=>{
    setCurrent(prev=> color )
  }

  return (
    <>
    <div className='w-full h-screen flex-col justify-center items-center p-4 '>
      <Button count={count} colorRecieve={colorRecieve}/>
      
      <Box currentC={currentC}/>
    </div>  
    </>
  )
}

export default App
