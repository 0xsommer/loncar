"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Leistungen from "./leistungen";
import Testimonial from "./testimonial";
import SectionDivider from "./section-divider";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Leistungen", 0.1);

  return (
    <section
      id="leistungen"
      ref={ref}
      className="w-full max-w-7xl scroll-mt-28 sm:mb-24 flex flex-col items-center"
    >
      <div className="flex md:hidden"><SectionDivider /></div>
      <Leistungen />
      <div className="-mt-20"><Testimonial /></div>
    </section>
  );
}
