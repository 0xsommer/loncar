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
      className="relative mb-28 w-full text-center leading-8 sm:mb-40 scroll-mt-28 flex flex-col justify-center items-center md:px-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>


      <div className="max-w-2xl flex flex-col gap-4 mt-8">
        <motion.p
          className="mb-8">
          In einer Zeit, in der digitale Giganten den Ton angeben, glaube ich fest daran, dass journalistische Unternehmen ebenso erfolgreich sein können. Und sogar müssen, denn sie haben einen wichtigen gesellschaftlichen Auftrag zu erfüllen. Mein Ziel ist es, diese Überzeugung in die Tat umzusetzen und das nachhaltige digitale Wachstum journalistischer Medien zu unterstützen.
        </motion.p>

        <motion.p
          className="mb-8">
          Mit meiner einzigartigen Kombination aus Fachwissen in Organisationsentwicklung, systemischem Coaching und langjähriger internationaler Führungserfahrung in der Medienbranche stehe ich bereit, Sie auf Ihrem Weg zum Erfolg zu begleiten. Ich baue auf meinem reichen Erfahrungsschatz in der digitalen Transformation und Entwicklung innovativer digitaler Strategien.
          In meiner Arbeitsweise setze ich stets auf einen praktischen und maßgeschneiderten Ansatz und integriere mich bei Bedarf nahtlos in die Teams meiner Kunden, um gemeinsam nachhaltige Erfolge zu erzielen.

        </motion.p>
      </div>

      <motion.a
        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 mt-8"
        href="/cv-loncar-may-2024.pdf"
        download
      >
        Lebenslauf (PDF){" "}
        <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
      </motion.a>
    </motion.section>
  );
}
