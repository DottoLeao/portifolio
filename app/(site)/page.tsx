import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Toolbox } from "../components/Toolbox";
import { DataVisualization } from "../components/DataVisualization";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { client } from "@/lib/sanity/client";
import { projectsQuery } from "@/lib/sanity/queries";

export default async function Home() {
  let projects = null;

  if (client) {
    try {
      projects = await client.fetch(projectsQuery);
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
        <Toolbox />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
