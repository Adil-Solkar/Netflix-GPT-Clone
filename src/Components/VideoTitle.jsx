import React from "react";

const VideoTitle = ({ title, summary }) => {
  return (
    <div className="border w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <h3 className="text-lg mt-4 mb-4 tracking-wider w-1/2">{summary}</h3>
      <button className="bg-white text-black font-semibold px-5 py-2 rounded hover:bg-gray-200 transition">
        ▶ Play
      </button>
      <button className="bg-[rgba(109,109,110,0.7)] text-white font-semibold px-6 py-2 rounded hover:bg-[rgba(109,109,110,0.4)] transition ml-3">
        ℹ️ More Info
      </button>
    </div>
  );
};

export default VideoTitle;
