import { CERTS, PARTNERS, TRAININGS } from "@/lib/cv-data";

export default function Training() {
  const loop = [...PARTNERS, ...PARTNERS];
  return (
    <section id="training" className="py-24 md:py-32">
      <div className="px-5 md:px-10">
        <p className="mb-4 text-sm uppercase tracking-widest text-brand">[ Master Trainer ]</p>
        <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">Training &amp;<br />facilitation.</h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every module is designed from formative research and delivered with participatory methods, so participants own and use what they learn.
        </p>
        <ol className="mt-14 border-l border-foreground pl-6 md:pl-10">
          {TRAININGS.map(([y, t, c]) => (
            <li key={t} className="relative mb-8 max-w-4xl">
              <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-brand md:-left-[47px]" />
              <div className="font-mono text-sm text-brand">{y}</div>
              <div className="text-xl font-semibold leading-snug">{t}</div>
              <div className="text-sm text-muted-foreground">{c}</div>
            </li>
          ))}
        </ol>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {CERTS.map(([y, c]) => (
            <div key={c} className="rounded-3xl border border-border p-6"><div className="font-mono text-sm text-brand">{y}</div><div className="mt-1 font-semibold">{c}</div></div>
          ))}
        </div>
      </div>
      <p className="mb-6 mt-24 px-5 text-sm uppercase tracking-widest text-muted-foreground md:px-10">[ Worked with ]</p>
      <div className="overflow-hidden border-y border-foreground py-6">
        <div className="marquee-track flex w-max gap-14 whitespace-nowrap">
          {loop.map((p, i) => <span key={i} className="text-4xl font-extrabold uppercase tracking-tighter md:text-6xl">{p} <span className="text-brand">✦</span></span>)}
        </div>
      </div>
    </section>
  );
}