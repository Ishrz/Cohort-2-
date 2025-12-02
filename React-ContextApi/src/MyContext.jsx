import { createContext, useContext } from "react";

const MyContext=createContext()


//instead of using Mycontext.Provider as a wrapper now we are using MycontextProvider component which returning the same and for wrapping we taking App(in this case or any coponent) as a children prop from main and wrapping that component here: cleaner syntax 
const MyContextProvider=({children})=>{
    return (
      <MyContext.Provider value={"Hiii from Context"}>
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