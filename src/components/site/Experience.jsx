import { EXPERIENCE } from "@/lib/cv-data";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 md:px-10 md:py-36">
      <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">Experience<span className="text-brand">.</span></h2>
      <p className="mt-4 text-muted-foreground">Selected assignments by type of work</p>
      <div className="mt-14 space-y-20">
        {EXPERIENCE.map((g) => (
          <div key={g.key} className="grid gap-6 md:grid-cols-[1fr_2fr]">
            <h3 className="text-2xl font-bold tracking-tight md:sticky md:top-6 md:self-start md:text-3xl">{g.title}</h3>
            <ul className="border-t border-foreground">
              {g.items.map(([year, title, client, role]) => (
                <li key={title} className="group grid gap-1 border-b border-border py-5 transition hover:bg-brand-soft md:grid-cols-[110px_1fr] md:px-3">
                  <span className="font-mono text-sm text-brand">{year}</span>
                  <div>
                    <div className="text-lg font-semibold leading-snug">{title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{client} · {role}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}