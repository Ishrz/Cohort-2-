import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const [products,setProducts]=useState([])
    const[loader,setLoader]=useState(false)

    let fetchData= async ()=>{
        setLoader(true)
        let response=await axios("https://fakestoreapi.com/products")
        setProducts(response.data)
        setLoader(false)
    }


    useEffect(()=>{
        fetchData()
    },[])

if(loader) return <Loader className='p-30 flex justify-center items-center' />

  return (
    <div className='bg-violet-500 grid grid-cols-5 gap-3 w-full h-auto pt-7 p-4 max-[900px]:grid-cols-3 max-[550px]:grid-cols-2 max-[550px]:p-1 max-[550px]:pt-6 max-[300px]:grid-cols-1'>
        
      {products.map((elem,index)=>{
        return(
        <ProductCard elem={elem} key={index} />
        )
      })}
    </div>
  )
}

const ProductCard=({elem})=>{

    const navigate=useNavigate()
    return(
        
        <div onClick={()=>navigate(`/products/${elem.id}`)}  className='card bg-gray-800 group text-white flex flex-col gap-3 p-2.5 rounded-2xl items-center justify-center hover:cursor-pointer '>
            
            <img className=' group-hover:scale-115 transition-all duration-300 image p-2 aspect-square object-contain' src={elem.image}/>
            <div className='p-2 '>
            <h1 className='group-hover:text-blue-700 text-xl  line-clamp-2'>{elem.title}</h1>
            </div>
            {/* rating block */}
            <div className=' self-start para flex gap-3'>
            <p className='bg-green-600 px-2 py-0.8 rounded-3xl flex items-center justify-between place-items-center text-sm '>⭐{elem.rating.rate}</p>
            <p >{elem.rating.count}</p>
            </div>
             <p className='self-start text-lg text-white/70'>{elem.price} RS</p>
            
        </div>
    )
}


export default Products
