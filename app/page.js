import Image from "next/image";
import { Container } from "postcss";
import Bio from "./components/Bio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-12 py-4">
      <div className="container">
        <Bio />
      </div>
    
    </main>
  );
}
