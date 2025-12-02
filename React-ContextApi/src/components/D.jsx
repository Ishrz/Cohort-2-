import { useMyContext } from "../MyContext"


const D = () => {
    const val=useMyContext()
  return (
    <div className='bg-fuchsia-500 p-5'>
     <h1>D</h1>
      <p className='bg-red-600'>{val}</p>

    </div>
  )
}

export default D
