
import {Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import Users from '../components/Users.Jsx'
import About from '../components/About'

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users' element={<Users/>}/>
      <Route path='/about' element={<About/>} />
    </Routes>
  )
}

export default Routing
