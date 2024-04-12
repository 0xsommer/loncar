"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Ansatz");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Ansatz</SectionHeading>
      <p className="mb-8">
        Mit über <span className="font-medium">zwei Jahrzehnten Führungserfahrung</span> in renommierten Medienunternehmen in Kroatien und Österreich unterstütze ich nun andere Unternehmen dabei, digital erfolgreich zu sein. Meine Expertise liegt in der Leitung von Digitalisierungsprojekten sowie der Entwicklung und Umsetzung innovativer Strategien und digitaler Produkte.
      </p>
      
      <p className="mb-8">
        In meiner Arbeitsweise setze ich stets auf einen praktischen Ansatz und integriere mich bei Bedarf nahtlos in die Teams meiner Kunden. Ich entwickle individuelle Lösungen und setze auf agile Arbeitsmethoden, um die Zusammenarbeit und Kommunikation zu verbessern sowie die Qualität der Ergebnisse zu steigern.
      </p>

      <p className="">
        Ich verknüpfe fundierte Kenntnisse in Organisationsentwicklung und systemischem Coaching mit meiner langjährigen praktischen Erfahrung. Diese Kombination ermöglicht es mir, komplexe Veränderungsprozesse effektiver zu gestalten und zu begleiten. Ob im Bereich der digitalen Medien oder in anderen Branchen, die nach innovativen Lösungen für ihre digitalen Herausforderungen suchen - <span className="font-medium">ich stehe Ihnen als erfahrene Beraterin zur Seite</span>.
      </p>
    </motion.section>
  );
}
