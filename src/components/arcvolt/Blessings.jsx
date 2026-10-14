import React from "react";
import Reveal from "@/components/arcvolt/Reveal";
import { Image } from "@/components/ui/image";
import { GURU_EYES_URL } from "@/lib/siteData";

export default function Blessings() {
  return (
    <section className="relative overflow-hidden border-y hairline">
      <Image src={GURU_EYES_URL} alt="Guruji's blessing eyes" className="absolute inset-0 w-full h-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-background/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-10 py-16 sm:py-24 text-center">
        <Reveal>
          <span className="label-mono text-primary">Our guiding light</span>
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