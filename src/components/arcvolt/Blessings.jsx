import React from "react";
import Reveal from "@/components/arcvolt/Reveal";
import { Image } from "@/components/ui/image";
import { GURU_EYES_URL } from "@/lib/siteData";

export default function Blessings() {
  return (
    <section className="border-y hairline bg-background">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-16 sm:py-24 text-center">
        <Reveal>
          <div className="mx-auto w-full max-w-[640px] rounded-3xl overflow-hidden border hairline shadow-2xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Image src={GURU_EYES_URL} alt="Guruji's blessing eyes" fittingType="fit" originWidth={1024} originHeight={287} className="w-full h-auto" />
          </div>
          <span className="label-mono text-primary mt-10 inline-block">Our guiding light</span>
          <h2 className="display-title text-[clamp(1.8rem,5vw,4rem)] mt-4">
            Built with the <span className="text-primary">blessings</span> of our Guruji.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-foreground/70 text-base sm:text-lg leading-relaxed">
            Every structure we engineer is guided by his vision, his values and his watchful eyes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}