import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Products = () => {
    const [products,setProducts]=useState([])

    let fetchData= async ()=>{

        let response=await axios("https://fakestoreapi.com/products")
        setProducts(response.data)
    }


    useEffect(()=>{
        fetchData()
    },[])



  return (
    <div className='bg-violet-500 w-full h-full'>
      {products.map((elem,index)=>{
        return(

            <div>
         <h3>{elem.title}</h3>
        <h4>{elem.price}</h4>
        </div>
        )
      })}
    </div>
  )
}

export default Products
