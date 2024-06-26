import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Statement from "@/components/statement";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 md:pb-20">
      <Intro />
      <Statement />
      <SectionDivider />
      <Projects />
      <Skills />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
