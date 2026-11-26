import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/site/ThemeToggle";

const links = [
  ["Home", "#top"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Training", "#training"],
  ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 px-5 pb-4 pt-5 md:px-10">
      <nav className="hidden items-center gap-1.5 lg:flex">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:bg-brand hover:text-brand-foreground">
            {label}
          </a>
        ))}
      </nav>
      <a href="#top" className="text-xl font-bold tracking-tight lg:absolute lg:left-1/2 lg:-translate-x-1/2">
        Augustin <span className="text-brand">Kimonyo</span>
      </a>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground px-4 py-1.5 text-sm font-semibold transition hover:bg-foreground hover:text-background">
          Say Hello <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}