import React from "react";
import gurujiEyesImg from "@/assets/guruji-eyes.jpg";

export default function EyesHover() {
  return (
    <div className="relative mx-auto w-full max-w-[760px] aspect-[1153/331] rounded-2xl sm:rounded-3xl overflow-hidden border hairline shadow-2xl [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] bg-card/40">
      <img
        src={gurujiEyesImg}
        alt="Built with the blessings of our Guruji"
        className="w-full h-full object-cover object-center block"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}