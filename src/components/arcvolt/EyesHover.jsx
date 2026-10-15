import React from "react";
import { Image } from "@/components/ui/image";
import { GURU_EYES_URL } from "@/lib/siteData";

export default function EyesHover() {
  return (
    <div className="relative mx-auto w-full max-w-[640px] aspect-[2/1] rounded-3xl overflow-hidden border hairline shadow-2xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <Image
        src={GURU_EYES_URL}
        alt="Wise eyes of an elderly man"
        fittingType="fill"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}