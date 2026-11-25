import { Download } from "lucide-react";
import { COUNTRIES, CV_URL, EDUCATION, LANGUAGES, MEMBERSHIPS, STATS } from "@/lib/cv-data";

export default function About() {
  return (
    <section id="about" className="rounded-[2rem] bg-invert px-5 py-24 text-invert-foreground md:mx-8 md:rounded-[2.5rem] md:px-12 md:py-32">
      <p className="mb-6 text-sm uppercase tracking-widest text-brand">[ About ]</p>
      <h2 className="max-w-6xl text-3xl font-semibold leading-tight tracking-tight md:text-6xl">
        I bridge the gap between rigorous policy design and ground-level implementation, championing men as allies for gender equality and lasting social inclusion.
      </h2>
      <p className="mt-8 max-w-3xl text-lg text-invert-muted">
        Master Trainer in Gender Mainstreaming, Engaging Men and Boys (Positive Masculinity) and SGBV. I have led institutional gender audits, national policy formulations and cross-sectoral action plans for governments, UN agencies and partners including the African Development Bank and Equimundo, grounded in evidence-based research and data triangulation.
      </p>
      <div className="mt-14 grid grid-cols-2 gap-6 border-y border-invert-foreground/15 py-10 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="text-6xl font-extrabold tracking-tighter text-brand md:text-7xl">{s.value}</div>
            <div className="mt-2 text-sm text-invert-muted">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-14 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-invert-muted">Education</h3>
          {EDUCATION.map(([y, d, u]) => (
            <div key={d} className="mb-4"><div className="text-xs text-brand">{y}</div><div className="font-semibold">{d}</div><div className="text-sm text-invert-muted">{u}</div></div>
          ))}
        </div>
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-invert-muted">Languages</h3>
          {LANGUAGES.map(([l, v]) => (
            <div key={l} className="flex justify-between border-b border-invert-foreground/10 py-2"><span className="font-semibold">{l}</span><span className="text-invert-muted">{v}</span></div>
          ))}
          <h3 className="mb-3 mt-8 text-sm uppercase tracking-widest text-invert-muted">Memberships</h3>
          {MEMBERSHIPS.map((m) => <p key={m} className="mb-2 text-sm text-invert-muted">{m}</p>)}
        </div>
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-invert-muted">Worked in 25 countries</h3>
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((c) => <span key={c} className="rounded-full border border-invert-foreground/20 px-3 py-1 text-xs">{c}</span>)}
          </div>
        </div>
      </div>
      <a href={CV_URL} target="_blank" rel="noreferrer" className="mt-14 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-brand-foreground transition hover:bg-invert-foreground hover:text-invert">
        Download full CV <Download className="h-4 w-4" />
      </a>
    </section>
  );
}