import { icons } from "lucide-react"
import { features } from "../constants"
const FeatureSection = () => {
  return (
    <div id="FeatureSection" className="relative mt-20 border-b border-neutral-800 min-h-[800px] ">
        <div className="text-center">
            <span className="bg-neutral-900 text-purple-500 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                Features
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide   ">
                Easily Bild 
                <span className="bg-linear-to-r from-purple-500 to-orange-800 text-transparent bg-clip-text ">
                    {" "}your code
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap gap-2 mt-10 lg:mt-20  ">
            {features.map( (item,index)=>(
                <div key={index} className="w-full sm:1/2 lg:w-1/3 hover:shadow-purple-500 shadow-sm  ">
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-700  justify-center items-center rounded-full">
                            {item.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-xl">
                                {item.text}
                            </h5>
                            <p className="text-md p-2 mb-20 text-neutral-500">
                                {item.description}
                            </p>
                        </div>  
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureSection
