import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Featured from "@/components/site/Featured";
import About from "@/components/site/About";
import Experience from "@/components/site/Experience";
import Training from "@/components/site/Training";
import Contact from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Augustin Kimonyo | Gender and Social Inclusion Expert" },
      { name: "description", content: "GESI expert and Master Trainer with 18 years of consultancy across 25 countries: gender policy, audits, training and positive masculinity." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Featured />
      <About />
      <Experience />
      <Training />
      <Contact />
    </main>
  );
}