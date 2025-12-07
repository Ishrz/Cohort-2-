import { testimonials } from "../constants"
const Testimonials = () => {
  return (
    <div className="mt-20 tracking-tight">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 ">
            what people are Saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map( (item,index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin text">
                        <p>{item.text}</p>
                        <div className="flex items-start mt-8">
                            <img className="w-12 h-12   rounded-full border border-neutral-300 mr-6" src={item.image} alt={item.user} />
                            <div className="">
                                <h6>{item.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">{item.company}</span>
                            </div>
                        </div>
                    </div>   
                </div>
            ))}
        </div>

    </div>
  )
}

export default Testimonials
