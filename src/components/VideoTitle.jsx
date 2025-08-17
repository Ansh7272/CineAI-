const VideoTitle = ({original_title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-25 absolute text-white   bg-gradient-to-r from-black">
       <h1 className="font-bold text-3xl">{original_title}</h1> 
       <p className="py-6  w-1/4 clamp-4 mb-5">{overview}</p>
       <div className="">
            <button className="hover:opacity-80 text-black p-3 px-13   rounded text-lg font-semibold bg-white">Play</button>
            <button className="mx-2 p-3 px-10 rounded text-lg font-semibold bg-gray-900 text-white hover:opacity-80 y-50 "> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle