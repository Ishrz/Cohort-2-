import React from "react";
import { useMyContext } from "../MyContext";

const E = () => {

    const elem=useMyContext()
  return (
    <div className='bg-gray-400 p-4'>
      <h1>E</h1>
         <p className='bg-red-600'>{elem}</p>
    </div>
  );
};

export default E;
