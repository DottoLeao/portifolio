import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { OutputLab } from "../components/OutputLab";
import { DataVisualization } from "../components/DataVisualization";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { client } from "@/lib/sanity/client";
import { projectsQuery, labContentQuery } from "@/lib/sanity/queries";

export default async function Home() {
  let projects = null;
  let labContent = null;

  if (client) {
    try {
      [projects, labContent] = await Promise.all([
        client.fetch(projectsQuery),
        client.fetch(labContentQuery),
      ]);
    } catch {
      // Sanity not reachable — fallback data will be used by components
    }
  }

  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0 bg-white dark:bg-black">
        <ParticleNetwork />
      </div>

      <div className="relative z-10">
        <Hero />
        <Projects projects={projects} />
        <DataVisualization />
        <OutputLab content={labContent} />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
