const VideoTitle = ({ title, summary }) => {
  return (
    <div className="w-screen aspect-video inset-0 overflow-auto px-16  absolute text-white bg-gradient-to-r from-black ">
      <div className="mt-40">
        <h1 className="text-4xl font-bold ">{title}</h1>
      <h3 className="text-lg mt-4 mb-4 tracking-wider w-1/2">{summary}</h3> 
      <div>
        <button className="bg-white text-black font-semibold px-5 py-2 rounded hover:bg-gray-200 transition">
          ▶ Play
        </button>
        <button className="bg-[rgba(109,109,110,0.7)] text-white font-semibold px-6 py-2 rounded hover:bg-[rgba(109,109,110,0.4)] transition ml-3">
          ℹ️ More Info
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default VideoTitle;

// if summary is long then clamp the sentence short

