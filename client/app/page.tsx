import About from "@/components/about";
import Contact from "@/components/contact";
import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Leistungen from "@/components/leistungen";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pb-20">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
