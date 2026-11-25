import { Download, Mail, Phone } from "lucide-react";
import { CV_URL, REFERENCES } from "@/lib/cv-data";

export default function Contact() {
  return (
    <footer id="contact" className="rounded-t-[2rem] bg-brand px-5 pb-10 pt-24 text-brand-foreground md:mx-8 md:rounded-t-[2.5rem] md:px-12 md:pt-32">
      <p className="mb-4 text-sm uppercase tracking-widest text-brand-foreground/70">[ Professional references ]</p>
      <h2 className="text-6xl font-extrabold leading-[0.9] tracking-tighter md:text-[10vw]">Let’s talk<br />equality.</h2>
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {REFERENCES.map((r) => (
          <div key={r.name} className="rounded-3xl bg-card p-6 text-card-foreground">
            <div className="text-xl font-bold">{r.name}</div>
            <div className="mt-1 text-sm font-medium">{r.role}</div>
            <div className="mb-4 text-sm text-muted-foreground">{r.org}</div>
            <a href={`mailto:${r.email}`} className="flex items-center gap-2 break-all text-sm transition hover:text-brand"><Mail className="h-4 w-4 shrink-0" />{r.email}</a>
            <a href={`tel:${r.tel}`} className="mt-1 flex items-center gap-2 text-sm transition hover:text-brand"><Phone className="h-4 w-4 shrink-0" />{r.tel}</a>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-brand-foreground/30 pt-6">
        <a href={CV_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-background transition hover:bg-card hover:text-card-foreground">
          Download full CV <Download className="h-4 w-4" />
        </a>
        <p className="text-sm text-brand-foreground/70">© Augustin Kimonyo · Kigali, Rwanda</p>
      </div>
    </footer>
  );
}