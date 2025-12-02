import { createContext, useContext, useState } from "react";

const MyContext=createContext()

//main reason for this clean code and for value what if it get large so we create them here so other component looks clean
//instead of using Mycontext.Provider as a wrapper now we are using MycontextProvider component which returning the same and for wrapping we taking App(in this case or any coponent) as a children prop from main and wrapping that component here: cleaner syntax 
const MyContextProvider=({children})=>{

    const[count ,setCount]=useState(0)

    const value={
        count,
        setCount
    }



    return (
      <MyContext.Provider value={value}>
        {children}
      </MyContext.Provider>
    );
}



//isntead of using useContext(MYcontext)we use useMyContext cleaner function code
const useMyContext=()=>{
    return useContext(MyContext)
}



// here we exporting or custom hook and provider for clean code and no need to import any more hooks or function (importing them here)
export {MyContextProvider,useMyContext}