import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Achievements } from "@/components/achievements";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer, ScrollToTop, BackgroundParticles } from "@/components/layout-utils";

export default function Home() {
  return (
    <main className="relative bg-gradient-mesh min-h-screen">
      <BackgroundParticles />
      <Navbar />
      
      <div className="space-y-0">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </div>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
}
