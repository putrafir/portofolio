import Image from "next/image";
import Navbar from "./components/layout/navbar";
import About from "./page/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0b0b0f] to-black text-white">
      <Navbar />
      <About />
    </main>
  );
}
