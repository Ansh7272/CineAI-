import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = () => {
  useMovieTrailer();
  return (
    <div className="bg-green-500  ">
      <iframe className="w-screen aspect-video " src="https://www.youtube.com/embed/d9erkpdh5o0?autoplay=1&mute=1 " title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" refererpolicy="strict-origin-when-cross-origin &autoPlay= 1 &mute=1" ></iframe></div>
  )
}

export default VideoBackground;

