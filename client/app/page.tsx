import About from "@/components/about";
import Contact from "@/components/contact";
import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pb-20">
      <Cursor />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <SectionDivider />
      <Skills />
      <Testimonial />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
