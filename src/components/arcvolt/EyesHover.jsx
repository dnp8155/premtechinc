import React, { useRef } from "react";
import { GURU_EYES_VIDEO_URL } from "@/lib/siteData";

export default function EyesHover() {
  const videoRef = useRef(null);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
  };

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div
      onMouseEnter={start}
      onMouseLeave={stop}
      onTouchStart={start}
      onTouchEnd={stop}
      className="relative mx-auto w-full max-w-[640px] rounded-3xl overflow-hidden border hairline shadow-2xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <video
        ref={videoRef}
        src={`${GURU_EYES_VIDEO_URL}#t=0.001`}
        muted
        playsInline
        preload="auto"
        className="w-full h-auto block"
      />
    </div>
  );
}