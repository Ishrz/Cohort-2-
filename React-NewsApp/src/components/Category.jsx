import React from 'react'
import Wrapper from './Wrapper'

const Category = ({className}) => {
    let categories=["technology","sports","science","health","general","entertainment","business"]
  return (
    <div className={`${className} bg-base-100`}>
    <Wrapper>

    <div className={`scroll-hidden w-fit max-w-full m-auto flex  overflow-x-auto overflow-hidden px-4 space-x-2.5 `}>
        {categories.map( (category,index) => {
            return(
                <button key={index} className="btn btn-active btn-primary hover:bg-blue-700 hover:scale-105 transition-all linear text-black ">{category}</button>
            )
        })}
      
    
    </div>

    </Wrapper>
    </div>
  )
}

export default Category
