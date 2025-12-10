import React from 'react'
import Navbar from './components/Navbar'
import News from './page/News'
import Category from './components/Category'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar className="sticky top-0 z-10"/>
      <Category className="py-10 sticky top-10 z-9 " />
      <News className='mb-15' />
      <Footer/>
    </div>
  )
}

export default App
