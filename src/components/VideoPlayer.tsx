"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <button
        onClick={toggleSound}
        className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white text-xs uppercase tracking-widest px-3 py-2 transition-colors"
      >
        {muted ? "Sound On" : "Sound Off"}
      </button>
    </div>
  );
}
