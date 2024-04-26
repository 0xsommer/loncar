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
import Blob from "@/components/blob";
import SectionHeading from "@/components/section-heading";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pb-20">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <Skills />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
