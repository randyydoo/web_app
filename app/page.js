import Image from "next/image";
import Bio from "./components/Bio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Bio />
      </main>
  );
}
