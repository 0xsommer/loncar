"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
      <div className="w-full max-w-4xl grid grid-cols-2 grid-rows-3 gap-y-0 gap-x-0 justify-items-center hidden">

        <div className="horizontal col-start-1 col-end-2 row-start-1 w-full h-px bg-gradient-to-l from-transparent via-[#0b151e39] dark:via-[#ffffff34] mt-[1px] justify-self-start" />
        <div className="horizontal col-start-2 col-end-3 row-start-1 w-full h-px bg-gradient-to-r from-transparent via-[#0b151e39] dark:via-[#ffffff34] mt-[1px] justify-self-end" />

        <div className="horizontal col-start-1 col-end-3 row-start-2 w-full h-px bg-gradient-to-r from-transparent via-[#0b151e39] dark:via-[#ffffff34]" />

        <div className="horizontal col-start-1 col-end-2 row-start-3 w-full h-px bg-gradient-to-r from-transparent via-[#0b151e39] dark:via-[#ffffff34] mt-[1px]" />
        <div className="horizontal col-start-2 col-end-3 row-start-3 w-full h-px bg-gradient-to-r from-transparent via-[#0b151e39] dark:via-[#ffffff34] mt-[1px]" />

        <div className="vertical col-start-2 row-start-1 row-end-2 w-px h-12 bg-gradient-to-b from-transparent to-[#0b151e39] dark:via-[#ffffff34] justify-self-start ml-[1px]" />
        <div className="vertical col-start-1 row-start-1 row-end-2 w-px h-1/2 bg-gradient-to-t from-transparent via-[#0b151e39] dark:via-[#ffffff34] justify-self-start ml-[1px]" />
        <div className="vertical col-start-1 row-start-2 row-end-3 w-px h-1/2 bg-gradient-to-b from-transparent via-[#0b151e39] dark:via-[#ffffff34] justify-self-start place-self-end ml-[1px]" />

        <div className="vertical col-start-3 row-start-1 row-end-2 w-px h-1/2 bg-gradient-to-t from-transparent via-[#0b151e39] dark:via-[#ffffff34] justify-self-start ml-[1px]" />
        <div className="vertical col-start-3 row-start-2 row-end-3 w-px h-1/2 bg-gradient-to-b from-transparent via-[#0b151e39] dark:via-[#ffffff34] justify-self-start place-self-end ml-[1px]" />


        <div className="dot size-1 bg-black rounded-full col-start-1 row-start-1 justify-self-start" />
        <div className="dot size-1 bg-black rounded-full col-start-3 row-start-1 justify-self-end" />

        <div className="dot size-1 bg-black rounded-full col-start-3 row-start-2 justify-self-end" />
        <div className="dot size-1 bg-black rounded-full col-start-1 row-start-2 justify-self-start" />
        <div className="dot size-1 bg-black rounded-full col-start-1 row-start-3 justify-self-start" />
        <div className="dot size-1 bg-black rounded-full col-start-3 row-start-3 justify-self-end" />
        <div className="dot size-1 bg-black rounded-full col-start-1 col-end-3 row-start-3" />


        <p className="max-w-2xl col-start-1 col-end-3 row-start-1 h-full justify-self-center place-self-center py-24">
          Mit über <span className="font-medium">zwei Jahrzehnten Führungserfahrung</span> in renommierten Medienunternehmen in Kroatien und Österreich unterstütze ich nun andere Unternehmen dabei, digital erfolgreich zu sein. Ich verknüpfe fundierte Kenntnisse in Organisationsentwicklung und systemischem Coaching mit meiner langjährigen praktischen Erfahrung. Diese Kombination ermöglicht es mir, komplexe Veränderungsprozesse effektiver zu gestalten und zu begleiten.
        </p>
        <p className="max-w-2xl col-start-1 col-end-3 row-start-2 justify-self-center place-self-center">
          Meine Expertise liegt in der <span className="font-medium">digitalen Transformation</span>, in der Entwicklung und Umsetzung innovativer Strategien und digitaler Produkte. In meiner Arbeitsweise setze ich stets auf einen praktischen und maßgeschneiderten Ansatz und integriere mich bei Bedarf nahtlos in die Teams meiner Kunden.
        </p>
      </div>


      <div className="max-w-2xl flex flex-col gap-4 mt-8">
        <p className="mb-8">
          Mit über <span className="font-medium">zwei Jahrzehnten Führungserfahrung</span> in renommierten Medienunternehmen in Kroatien und Österreich unterstütze ich nun andere Unternehmen dabei, digital erfolgreich zu sein. Ich verknüpfe fundierte Kenntnisse in Organisationsentwicklung und systemischem Coaching mit meiner langjährigen praktischen Erfahrung. Diese Kombination ermöglicht es mir, komplexe Veränderungsprozesse effektiver zu gestalten und zu begleiten.
        </p>

        <p className="mb-8">
          Meine Expertise liegt in der <span className="font-medium">digitalen Transformation</span>, in der Entwicklung und Umsetzung innovativer Strategien und digitaler Produkte. In meiner Arbeitsweise setze ich stets auf einen praktischen und maßgeschneiderten Ansatz und integriere mich bei Bedarf nahtlos in die Teams meiner Kunden.
        </p>
      </div>

      <div className="w-full max-w-4xl h-24 md:h-64 relative -mt-16 md:-mt-32 opacity-80 hidden">
        <div className="absolute right-0 w-px bg-gradient-to-t from-zinc-200 dark:from-[#ffffff34] h-full" />
        <div className="absolute left-0 w-px bg-gradient-to-t from-zinc-200 dark:from-[#ffffff34] h-full" />
        <div className="absolute -right-8 bottom-0 h-px bg-gradient-to-r from-zinc-200 dark:from-[#ffffff34] w-8" />
        <div className="absolute -left-8 bottom-0 h-px bg-gradient-to-l from-zinc-200 dark:from-[#ffffff34] w-8" />

        <div className="absolute left-1/2 right-1/2 bottom-0 w-px bg-gradient-to-t from-zinc-200 dark:from-[#ffffff34] h-1/2" />

        <div className="absolute left-0 -bottom-8 w-px bg-gradient-to-b from-zinc-200 dark:from-[#ffffff34] h-8" />
        <div className="absolute right-0 -bottom-8 w-px bg-gradient-to-b from-zinc-200 dark:from-[#ffffff34] h-8" />

        <div className="absolute bottom-0 left-0 z-20 h-px w-1/2  bg-gradient-to-r from-transparent via-[#0b151e39] dark:via-[#ffffff34]" />
        <div className="absolute bottom-0 right-0 z-20 h-px w-1/2  bg-gradient-to-r from-transparent via-[#0b151e39] dark:via-[#ffffff34]" />

        <div className="absolute w-full -bottom-0.5 -mt-1">
          <div className="absolute size-1.5 -mr-0.5 bg-zinc-300 rounded-full right-0 bottom-0" />
          <div className="absolute size-1.5 -ml-0.5 bg-zinc-300 rounded-full left-0 bottom-0" />
          <div className="absolute size-1.5 bg-zinc-300 rounded-full bottom-0 left-1/2 right-1/2 -ml-0.5" />
        </div>
      </div>


    </motion.section>
  );
}
