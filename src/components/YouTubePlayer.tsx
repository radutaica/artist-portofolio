"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubePlayer({ videoId }: { videoId: string }) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    function initPlayer() {
      if (!containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          showinfo: 0,
          loop: 1,
          playlist: videoId,
          iv_load_policy: 3,
          vq: "hd1080",
        },
        events: {
          onReady: (e: any) => {
            e.target.setPlaybackQuality("hd1080");
            e.target.playVideo();
          },
        },
      });
    }

    if (window.YT?.Player) {
      initPlayer();
    } else {
      const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (!existing) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      playerRef.current?.destroy();
    };
  }, [videoId]);

  function toggleSound() {
    if (!playerRef.current) return;
    if (muted) {
      playerRef.current.unMute();
      setMuted(false);
    } else {
      playerRef.current.mute();
      setMuted(true);
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={containerRef}
        className="absolute w-[calc(100%+80px)] h-[calc(100%+80px)] -top-10 -left-10 pointer-events-none"
      />
      <button
        onClick={toggleSound}
        className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white text-xs uppercase tracking-widest px-3 py-2 transition-colors z-10"
      >
        {muted ? "Sound On" : "Sound Off"}
      </button>
    </div>
  );
}
