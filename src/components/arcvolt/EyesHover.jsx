import React, { useRef, useState } from "react";
import { Image } from "@/components/ui/image";
import { GURU_EYES_URL, GURU_EYES_VIDEO_URL } from "@/lib/siteData";

export default function EyesHover() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
    setPlaying(true);
  };

  const stop = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setPlaying(false);
  };

  return (
    <div
      onMouseEnter={start}
      onMouseLeave={stop}
      onTouchStart={start}
      onTouchEnd={stop}
      className="relative mx-auto w-full max-w-[640px] rounded-3xl overflow-hidden border hairline shadow-2xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <Image src={GURU_EYES_URL} alt="Guruji's blessing eyes" fittingType="fit" originWidth={1024} originHeight={293} className="w-full h-auto" />
      {GURU_EYES_VIDEO_URL && (
        <video
          ref={videoRef}
          src={GURU_EYES_VIDEO_URL}
          muted
          playsInline
          preload="auto"
          onEnded={() => setPlaying(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${playing ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}