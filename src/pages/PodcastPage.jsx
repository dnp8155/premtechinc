import React, { useState } from "react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Play, Youtube, ArrowUpRight, Clock, User, Building2, Sparkles } from "lucide-react";

export const PODCAST_EPISODES = [
  {
    id: "episode-1",
    episodeNumber: "Episode 01",
    title: "Jake van Baarsel, PE | Golden Beaver Award Winner",
    fullTitle: "Episode 1 | Jake van Baarsel, PE | Construction Heroes of the World",
    guest: "Jake van Baarsel, PE",
    guestRole: "Former Chief Estimator & Structures Lead, Skanska USA / California",
    videoId: "FueaKu9XTJA",
    youtubeUrl: "https://youtu.be/FueaKu9XTJA?si=1vwrhbfGvMxTV7Uj",
    thumbnail: "/podcasts/episode-1.jpg",
    duration: "45+ min",
    highlights: [
      "Golden Beaver Award recognition in heavy civil & structural engineering",
      "Managing high-stakes bridge & transit infrastructure across California & North America",
      "Invaluable advice for civil engineering students, estimators & construction entrepreneurs",
      "Balancing structural precision with on-site constructability and risk management"
    ],
    status: "Completed",
    isAvailable: true
  },
  {
    id: "episode-2",
    episodeNumber: "Episode 02",
    title: "The Collavinos | Building America's Impossible Dreams",
    fullTitle: "THE COLLAVINOS: Building America's Impossible Dreams (Podcast) #ConstructionHeroes",
    guest: "The Collavino Family",
    guestRole: "Collavino Group — Legends Behind One World Trade Center & Gordie Howe Bridge",
    videoId: "rBdgXfl0WRI",
    youtubeUrl: "https://youtu.be/rBdgXfl0WRI?si=w5ckXqzjtekCAo4K",
    thumbnail: "/podcasts/episode-2.jpg",
    duration: "60+ min",
    highlights: [
      "The engineering triumph of constructing One World Trade Center (Freedom Tower, NYC)",
      "Behind-the-scenes on the Gordie Howe International Bridge (Windsor–Detroit)",
      "60+ years of precast concrete innovations, mass pours & high-rise structural milestones",
      "Lessons in multi-generational family leadership, courage & future tech in construction"
    ],
    status: "Completed",
    isAvailable: true
  },
  {
    id: "episode-3",
    episodeNumber: "Episode 03",
    title: "Upcoming Heavy Construction Leader",
    fullTitle: "Episode 3 | Construction Heroes of the World (Coming Soon)",
    guest: "Industry Pioneer & Infrastructure Icon",
    guestRole: "Global Civil Engineering & Megaproject Innovator",
    videoId: "",
    youtubeUrl: "https://www.youtube.com/@ConstructionHeroesoftheWorld",
    thumbnail: "/real-images/heavy-civil-metro-hero.jpg",
    duration: "Coming Soon",
    highlights: [
      "Next deep dive into mega-scale civil, bridge & energy infrastructure engineering",
      "Field-tested engineering strategies, temporary works & cutting-edge constructability",
      "Exclusive interview exploring the untold stories behind landmark projects",
      "Premiere dropping soon on YouTube and all podcast channels"
    ],
    status: "Coming Soon",
    isAvailable: false
  }
];

export default function PodcastPage() {
  const [activeVideoId, setActiveVideoId] = useState(PODCAST_EPISODES[0].videoId);

  const activeEpisode = PODCAST_EPISODES.find((ep) => ep.videoId === activeVideoId) || PODCAST_EPISODES[0];

  return (
    <>
      <SEO
        title="Construction Heroes of the World | Engineering Podcast | Prem Technology Inc."
        description="Watch Construction Heroes of the World — the premier construction and engineering podcast featuring legendary infrastructure leaders, Golden Beaver Award winners, and megaproject builders."
        keywords="Construction Heroes of the World, construction podcast, structural engineering podcast, Jake van Baarsel, Collavinos World Trade Center, Prem Technology podcast"
        canonical="/podcast"
      />

      <PageHero
        crumb="Podcasts"
        kicker="Original Series · CHOT Podcast"
        title="Construction Heroes"
        accent="of the World."
        text="Untold stories, legendary engineering feats, and masterclasses from the pioneers who built North America's most demanding infrastructure."
        img="/projects/industrial-steel-support/steel-support-2.jpg"
        aside={{ label: "Episodes", value: "02 + 01", sub: "2 Completed · 1 Coming Soon" }}
      />

      {/* CHOT Official Brand Banner */}
      <section className="bg-[#0e141d] border-b hairline py-6">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/podcasts/chot-logo.png"
              alt="CHOT - Construction Heroes of the World Official Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-primary/30 shadow-xl object-cover bg-card shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-mono text-[11px] font-bold tracking-wider uppercase border border-primary/30">
                  CHOT Series
                </span>
                <span className="text-xs text-muted-foreground font-mono">Official Show</span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-foreground mt-1">
                Construction Heroes of the World (CHOT)
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Hosted by Mehulbhai Patel & Prem Technology Inc.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@ConstructionHeroesoftheWorld?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2.5 text-xs sm:text-sm font-bold tracking-wide transition shadow-lg shrink-0"
          >
            <Youtube className="w-4 h-4 text-red-600 fill-current" /> Subscribe to Channel <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Featured Video Player Section */}
      <section className="bg-[#0b0f15] border-b hairline py-12 sm:py-16 lg:py-20 text-foreground">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>
                <span className="label-mono text-primary text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Now Playing · Video Player
                </span>
                <h2 className="display-title text-2xl sm:text-3xl lg:text-4xl mt-2">
                  {activeEpisode.title}
                </h2>
              </div>
              <a
                href={activeEpisode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff0000] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold hover:brightness-110 transition shrink-0 shadow-lg shadow-red-600/20"
              >
                <Youtube className="w-4 h-4" /> Watch on YouTube <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* Embedded YouTube Player */}
          <div className="rounded-3xl overflow-hidden border hairline bg-black shadow-2xl relative aspect-video max-w-5xl mx-auto">
            {activeVideoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=0&rel=0`}
                title={activeEpisode.fullTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-card">
                <Sparkles className="w-12 h-12 text-primary mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold font-display">Episode 03 Dropping Soon</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                  We are recording the 3rd masterclass. Subscribe to our official channel on YouTube to get notified when it premieres!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* All Episodes Grid */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="label-mono text-primary">All Podcast Episodes</span>
              <h3 className="display-title text-3xl sm:text-4xl mt-3">
                Watch & Learn from <span className="text-primary">Industry Giants.</span>
              </h3>
            </div>
            <p className="max-w-md text-muted-foreground text-sm sm:text-base leading-relaxed">
              Two full masterclass interviews now streaming, with Episode 3 currently in production and premiering soon.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PODCAST_EPISODES.map((ep, i) => (
            <Reveal key={ep.id} delay={i * 0.08} y={20}>
              <div className="rounded-3xl border hairline bg-card overflow-hidden hover:border-primary transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video overflow-hidden bg-black/60 border-b hairline">
                    <img
                      src={ep.thumbnail}
                      alt={ep.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[11px] font-semibold text-white tracking-wider">
                        {ep.episodeNumber}
                      </span>
                      <span className={`label-mono px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider ${
                        ep.status === "Completed"
                          ? "bg-primary text-primary-foreground"
                          : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      }`}>
                        {ep.status}
                      </span>
                    </div>

                    {ep.isAvailable && (
                      <button
                        onClick={() => setActiveVideoId(ep.videoId)}
                        className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-primary/90 text-primary-foreground grid place-items-center hover:scale-110 hover:bg-primary transition-all shadow-xl shadow-primary/30"
                        aria-label={`Play ${ep.title}`}
                      >
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </button>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{ep.duration}</span>
                      <span className="text-foreground/30">•</span>
                      <User className="w-3.5 h-3.5" />
                      <span className="line-clamp-1">{ep.guest}</span>
                    </div>

                    <h4 className="font-display font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
                      {ep.title}
                    </h4>

                    <p className="mt-2 text-xs font-mono text-primary/90">
                      {ep.guestRole}
                    </p>

                    <div className="mt-5 pt-4 border-t hairline space-y-2 text-xs text-muted-foreground">
                      {ep.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span className="line-clamp-2">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-7 pt-0">
                  {ep.isAvailable ? (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setActiveVideoId(ep.videoId);
                          window.scrollTo({ top: 400, behavior: "smooth" });
                        }}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground py-2.5 text-xs font-semibold transition"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" /> Play Above
                      </button>
                      <a
                        href={ep.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white/[0.05] hover:bg-[#ff0000] hover:text-white border hairline py-2.5 text-xs font-semibold transition"
                      >
                        <Youtube className="w-3.5 h-3.5" /> Watch on YT
                      </a>
                    </div>
                  ) : (
                    <a
                      href={ep.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.04] border hairline py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Subscribe for Episode 03
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Be part of Construction Heroes of the World."
        text="Are you engineering or delivering landmark infrastructure? Reach out to be featured on an upcoming episode or discuss technical project requirements."
        button="Connect with the Show"
      />
    </>
  );
}
