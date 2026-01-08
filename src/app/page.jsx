import Image from "next/image";
import Navbar from "./components/layout/navbar";
import About from "./page/about";
import Projects from "./page/projects";
import ExperiencePage from "./page/experience";

export default function Home() {
  return (
    // <main className=" min-h-screen overflow-hidden bg-[#0f0715] text-white">
    <main>
      <Navbar />
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b1b6d,transparent_40%)]" />
      <About />
      <Projects />
      <ExperiencePage />
    </main>
  );
}
