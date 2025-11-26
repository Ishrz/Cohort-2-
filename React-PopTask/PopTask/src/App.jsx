import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import RemoveEdit from './components/RemoveEdit'

const App=()=>{

  let op=["Remove","Edit"]
  const [current,setCurrent]=useState(false)
  const [naam,setNaam]=useState(null)

  let se=(val)=> setCurrent(val)

  let btn=(val,name)=> {
    setCurrent(val)
    setNaam(name)
  }
  return(
    <>
    <div className=''>
    { current && <RemoveEdit se={se} naam={naam}/>}
    <Button op={op} btn={btn}/>
    </div>
    </>
  )
}

export default App