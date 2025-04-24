import {
  NavBar,
  Hero,
  Skill,
  About,
  TimelineSection
} from "./HighOrderComponents";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative z-0 bg-[#171717]">
      <NavBar />
      <div className="h-screen">
        <Hero />
      </div>
      <Skill />
      <About />
      <TimelineSection />
    </main>
  );
}


