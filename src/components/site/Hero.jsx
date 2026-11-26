import { ArrowDownRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { BIG_WORDS, HERO_FALLBACK, HERO_IMG, SKILL_TAGS } from "@/lib/cv-data";

export default function Hero() {
  const words = [...BIG_WORDS, ...BIG_WORDS];
  return (
    <section id="top" className="px-3 md:px-8">
      <div className="relative flex min-h-[640px] flex-col justify-between gap-10 overflow-hidden rounded-[2rem] bg-invert p-6 text-invert-foreground md:h-[calc(100vh-110px)] md:rounded-[2.5rem] md:p-12">
        <Image src={HERO_IMG} fallbackSrc={HERO_FALLBACK} alt="Community members in a workshop circle" className="absolute inset-0 h-full w-full opacity-60 grayscale" />
        <div className="absolute inset-0 bg-black/45" />
        <p className="relative max-w-xl text-2xl leading-snug md:text-3xl">
          Gender and Social Inclusion expert and Master Trainer. 18 years across 25 countries, turning policy into practice and men into allies for equality.
        </p>
        <div className="relative -mx-6 overflow-hidden md:-mx-12">
          <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
            {words.map((w, i) => (
              <span key={i} className="text-[18vw] font-extrabold uppercase leading-none tracking-tighter md:text-[12vw]">
                {w}<sup className="ml-2 align-top text-[3vw] font-bold text-brand">®</sup>
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex items-end justify-between gap-6">
          <div className="flex max-w-2xl flex-wrap gap-2">
            {SKILL_TAGS.map((t) => (
              <span key={t} className="rounded-full border border-invert-foreground/20 bg-invert-foreground/10 px-4 py-2 text-sm backdrop-blur">{t}</span>
            ))}
          </div>
          <a href="#work" className="hidden items-center gap-2 text-lg font-semibold transition hover:text-brand md:inline-flex">
            Scroll for more <ArrowDownRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}