// components/VideoPlayer.js
"use client";
import { Substrack } from "@/components/assets/Substrack";
import React, { useState } from "react";

const VideoPlayer = () => {
  const [playvideo, setPlayvideo] = useState(false);
  const videoUrl = "/video/storeonline.mp4";

  return (
    <div className="relative w-full h-full">
      <video
        src={videoUrl}
        controls={playvideo}
        className="w-full h-full"
      ></video>
      <div
        className={`absolute inset-0 mix-blend-color ${
          playvideo
            ? "bg-transparent opacity-100 -z-10"
            : "bg-[#4a494d] opacity-55 z-0"
        }`}
      ></div>
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={() => {
          const video = document.querySelector("video");
          video.play();
          setPlayvideo(!playvideo);
        }}
      >
        {!playvideo && (
          <>
            <Substrack />
            <p className="text-[14px] md:text-[24px] font-semibold text-[#f3984d] font-rubik">
              Ver Vídeo
            </p>
          </>
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;
