import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-blue-200 text-2xl  w-full flex gap-8 items-center justify-center  px-4 py-4 ">
    <NavLink to='/' className={({isActive})=>{ return isActive? 'text-red-500':'' }}>Home</NavLink>
    <NavLink to='/products' className={({isActive})=>{ return isActive? 'text-red-500':'' }}>Products</NavLink>
    <NavLink to='/about' className={({isActive})=>{ return isActive? 'text-red-500':'' }}>About Us</NavLink>
    </div>
  )
}

export default Navbar
