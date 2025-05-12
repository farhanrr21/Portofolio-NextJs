import {
  NavBar,
  Hero,
  Skill,
  About,
  TimelineSection,
  Techstack,
  Achievement,
  Contact,
  Footer
} from "./HighOrderComponents";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative z-0 bg-black">
      <NavBar />
      <div className="h-screen">
        <Hero />
      </div>
      <Skill />
      <About />
      <Techstack />
      <TimelineSection />
      <Achievement />
      <Contact />
      <Footer/>
    </main>
  );
}


