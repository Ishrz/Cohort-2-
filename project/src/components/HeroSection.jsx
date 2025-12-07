import video2 from "../assets/video2.mp4"
import video1 from "../assets/video1.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col  items-center mt-6 lg:mt-20">
      <h1 className=" text-center text-4xl sm-text-6xl lg:text-7xl mx-auto  tracking wide">
        VirtualR Build tools
        <span className="bg-linear-to-r from-purple-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-neutral-500 max-w-4xl ">
        empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex max-[420px]:flex-col gap-4 justify-center my-10">
        <a
          href="#"
          className="bg-linear-to-r from-purple-500 to-orange-800 shadow-[5px_5px_20px_rgba(0,0,0,0.8)] py-3 px-4 mx-3 text-center rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border shadow-[5px_5px_15px_rgba(0,0,0,0.8)] ">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoplay
          loop
          mute
          className="rounded-lg w-1/2 border border-purple-500 shadow-purple mx-2 my-4 shadow-[5px_5px_15px_rgba(0,0,1,7.5)]"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoplay
          loop
          mute
          className="rounded-lg w-1/2 border border-purple-500 shadow-orange mx-2 my-4 shadow-[5px_5px_15px_rgba(0,0,1,7.5)]"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HeroSection
