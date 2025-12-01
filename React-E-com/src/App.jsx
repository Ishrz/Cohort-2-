import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className='bg-red-200 w-full h-full'>
     <Navbar/>
     <Outlet />
      
    </div>
  )
}

export default App
