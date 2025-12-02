// import React, { useContext } from 'react'
import './App.css'
import A from './components/A'
import B from './components/B'
const App = () => {


  return (
    <div className=' p-5 bg-red-300 border-2 w-65 flex flex-col gap-2'>
      Parent App
      <p className='bg-amber-400'></p>
      <A/>
      <B/>
    </div>
  )
}
export default App
