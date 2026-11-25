import { Image } from "@/components/ui/image";
import { FEATURED } from "@/lib/cv-data";

export default function Featured() {
  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-10 md:grid-cols-2">
        <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">Featured<br />assignments</h2>
        <div className="max-w-md md:self-end md:justify-self-end">
          <p className="text-lg text-muted-foreground">
            From national policies approved by Cabinet to field research in seven districts, work that bridges rigorous design and ground-level delivery.
          </p>
          <a href="#experience" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-brand hover:text-brand-foreground">See all assignments</a>
        </div>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {FEATURED.map((p, i) => (
          <article key={p.title} className={`group ${i === 1 ? "md:mt-20" : ""}`}>
            <div className="overflow-hidden rounded-[1.75rem] bg-brand-soft">
              <Image src={p.img} alt={p.title} className="aspect-[4/5] w-full transition duration-700 group-hover:scale-105" />
            </div>
            <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.meta}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => <span key={t} className="rounded-full border border-border px-3 py-1 text-xs font-medium">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}