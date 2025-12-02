import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
     <div className="bg-blue-200 text-2xl  w-full flex gap-8 items-center justify-center  px-4 py-4 ">
   
    <Menu to={'/'} title={'Home'} />
    <Menu to={'/products'} title={'Products'} />
    <Menu to={'/about'} title={'About Us'} />
   
    </div>
  )
}

const Menu=({to,title})=>{
  return(
   <>
    <NavLink to={to} className={({isActive})=>{ return isActive? 'text-red-500':'' }}>{title}</NavLink>
    {/* <NavLink to='/products' className={({isActive})=>{ return isActive? 'text-red-500':'' }}>Products</NavLink>
    <NavLink to='/about' className={({isActive})=>{ return isActive? 'text-red-500':'' }}>About Us</NavLink> */}
    </>
    
  )
}

export default Navbar
