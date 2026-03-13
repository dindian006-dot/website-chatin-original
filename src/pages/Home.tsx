import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { DownloadSection } from "../components/DownloadSection";
import { FAQ } from "../components/FAQ";

export function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <DownloadSection />
      <FAQ />
    </main>
  );
}
