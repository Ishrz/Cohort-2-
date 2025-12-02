import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
const SingleProduct = () => {
    const {id}= useParams()
    const [product,setProduct]=useState({})
    const[loader,setLoader]=useState(false)
    const navigate=useNavigate()

    let fetchData= async ()=>{
        setLoader(true)
        let response=await axios(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
        setLoader(false)
    }

    console.log(product)

    useEffect(()=>{
        fetchData()
    },[])

if(loader) return <Loader className='p-30 flex justify-center items-center' />

  return (
    <div>
        <button onClick={()=>navigate('/products')} className='bg-blue-600 m-4 px-5 py-3 rounded-2xl text-white hover:bg-blue-700 hover:scale-105 cursor-pointer'>Back to Products</button>
      <div className='card bg-gray-800 group text-white flex flex-col gap-3 p-5 rounded-2xl items-center justify-center hover:cursor-pointer m-4 mt-10'>
            
            <img className=' group-hover:scale-115 transition-all duration-300 image p-2 aspect-square object-contain m-8' src={product.image}/>
            <div className='p-2 '>
            <h1 className='group-hover:text-blue-700 text-xl '>{product.title}</h1>
            </div>
            {/* rating block */}
            <div className=' self-start para flex gap-3'>
            <p className='bg-green-600 px-2 py-0.8 rounded-3xl flex items-center justify-between place-items-center text-sm '>⭐{product.rate}</p>
            <p >{product?.rating?.count}</p>
            </div>
             <p className='self-start text-2xl text-white/70'>{product.price} RS</p>
             <p>{product.description} </p>
            
        </div>

  
    </div>
  )
}

export default SingleProduct
