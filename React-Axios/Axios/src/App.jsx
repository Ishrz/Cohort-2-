import axios from "axios";
import "./App.css";
import 'axios'
import { useEffect, useState } from "react";
const App = () => {
  const [users, setUsers]=useState([])
  const[formDetails,setFormDetails]= useState({name:"", age:""})


  let dataFetch = async () => {
      let response = await axios({
      url: "/users",
      baseURL: "https://69289694b35b4ffc50163d1b.mockapi.io",
    });
    setUsers(response.data)
    
  };

  let dataPost= async () => {
    let response= await axios({
      url:"/users",
      baseURL:"https://69289694b35b4ffc50163d1b.mockapi.io",
      method:'POST',
      data:{
        name:"aGIANnEWna",
        age:20,
      }
    })
    dataFetch()
  }

  let inputData=(evt)=>{
    
      // console.log(evt.target.value, evt.target.name)
      let {name, value}=evt.target
      setFormDetails(prev=>{
        return{
          ...prev,
          [name]:value
        }
      })
      
  }

  useEffect(()=>{
    dataFetch()
  },[])

  let postInput=async (evt)=>{
    evt.preventDefault()
    if((formDetails.name=" ") || (formDetails.age=" ")){

      return alert("Please enter valid response")
    } 
    let response= await axios({
      url:"/users",
      baseURL:"https://69289694b35b4ffc50163d1b.mockapi.io",
      method:'POST',
      data: formDetails
    })
    
      dataFetch()
      setFormDetails({name:"", age:""})
    // if(true){

    //   evt.target[0].value=""
    //   evt.target[1].value=""
    // }
  
  }
  
  let editData=async (user)=>{
    let response= await axios({
      url:`/users/${formDetails.id}`,
      baseURL:"https://69289694b35b4ffc50163d1b.mockapi.io",
      method:'PUT',
      data: formDetails
    })
    dataFetch()
    console.log(formDetails)
      setFormDetails({name:"", age:""})
  }

  let deleteData= async (id)=>{
      await axios({
      url:`/users/${id}`,
      baseURL:"https://69289694b35b4ffc50163d1b.mockapi.io",
      method:'DELETE',

    })
    dataFetch()
  }
  
  return (
    <div className="">
      
      <div className="bg-blue-400 w-110  p-4 gap-1.5 h-42 flex justify-center items-center rounded-2xl relative ">
        <button onClick={dataFetch} className="text-white bg-green-500">
          Fetch Data
        </button>

        {formDetails.editMode?
        <button onClick={editData} className="bg-amber-300">Edit Data</button>
        :
        <button onClick={dataPost} className="bg-indigo-600">Post Data</button>
        }


        <form onSubmit={postInput}>
        <input onChange={inputData} value={formDetails.name} name="name" placeholder="Enter Your Name" type="text" className="bg-red-300 rounded-2xl p-1.5  absolute top-0 left-0 text-black m-3" />
        <input onChange={inputData} value={formDetails.age} name="age" placeholder="Enter Your Age" type="number" className="bg-red-300 rounded-2xl p-1.5  absolute top-0 left-55 text-black m-3" />
        <input  type="submit" className="w-fit bg-black p-4 rounded-full"  />
        </form>
      </div>
      
        <div className="flex w-screen h-full flex-wrap">

        {users.map(user=>{
          return(
            <div key={user.id} className="bg-red-400 h-full min-w-fit w-2xs p-2 m-4 rounded-2xl flex flex-col items-center justify-center shrink-0 ">
              <h4>User ID : {user.id}</h4>
              <h4>Name : {user.name}</h4>
              <h4>Age : {user.age}</h4>
              <button onClick={()=> setFormDetails({...user,editMode:true}) } className="bg-green-300 m-1">Edit</button>
              <button onClick={()=>deleteData(user.id)} className="bg-red-600 m-1">Delete</button>
            </div>
          )
        })}
      
        </div>
    </div>
  );
};

export default App;
