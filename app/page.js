import Image from "next/image";
import { Container } from "postcss";
import Bio from "./components/Bio";
import Nav from "./components/Nav";
import Projects from "./components/Projects"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-12 py-4">
      <Nav />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Bio />
        <Projects />
      </div>
    
    </main>
  );
}
