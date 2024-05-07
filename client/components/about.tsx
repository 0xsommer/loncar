"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { HiDownload } from "react-icons/hi";

export default function About() {
  const { ref } = useSectionInView("About");
  const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 200,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

  return (
    <motion.section
      ref={ref}
      className="relative mb-28 w-full text-center leading-8 sm:mb-40 scroll-mt-28 flex flex-col justify-center items-center px-8 md:px-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>


      <div className="max-w-2xl flex flex-col gap-4 mt-8">
        <motion.p
        key={1}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={1}
        className="mb-8">
          Mit über <span className="font-medium">zwei Jahrzehnten Führungserfahrung</span> in renommierten Medienunternehmen in Kroatien und Österreich unterstütze ich nun andere Unternehmen dabei, digital erfolgreich zu sein. Ich verknüpfe fundierte Kenntnisse in Organisationsentwicklung und systemischem Coaching mit meiner langjährigen praktischen Erfahrung. Diese Kombination ermöglicht es mir, komplexe Veränderungsprozesse effektiver zu gestalten und zu begleiten.
        </motion.p>

        <motion.p
        key={2}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={2}
        className="mb-8">
          Ich habe erfolgreich digitale Strategien entwickelt und umgesetzt, die Wachstum der Reichweiten und Umsätze ermöglicht haben. Meine Expertise liegt in der <span className="font-medium">digitalen Transformation</span>, in der Entwicklung und Umsetzung innovativer Strategien und digitaler Produkte. In meiner Arbeitsweise setze ich stets auf einen praktischen und maßgeschneiderten Ansatz und integriere mich bei Bedarf nahtlos in die Teams meiner Kunden.
          </motion.p>
      </div>

      <motion.a
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 mt-8"
        href="/CV.pdf"
        download
      >
        Lebenslauf (PDF){" "}
        <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
      </motion.a>
    </motion.section>
  );
}
