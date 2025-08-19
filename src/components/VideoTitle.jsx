const VideoTitle = ({original_title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-6  md:px-25 absolute text-white   bg-gradient-to-r from-black">
       <h1 className="font-bold text-xl md:text-3xl">{original_title}</h1> 
       <p className="hidden md:inline-block py-6  w-1/4  mb-5">{overview}</p>
       <div className="">
            <button className="hover:opacity-80 text-black mt-2 md:mt-0 py-1 md:py-4 px-3 md:px-12  rounded text-lg font-semibold bg-white">Play</button>
            <button className="hidden md:inline-block mx-2 py-1 md:py-4 px-3 md:px-9  rounded text-lg font-semibold bg-gray-900 text-white hover:opacity-80 y-50 "> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle