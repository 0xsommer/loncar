"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import LogoSlider from "./logo-slider";

export default function Intro() {
  const { ref } = useSectionInView("Start", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="h-dvh md:h-screen mb-28 text-center sm:mb-0 scroll-mt-[100rem] items-center justify-between flex flex-col"
    >
      <div className="flex flex-col h-full w-full max-w-3xl gap-4 md:gap-8 justify-center items-center pb-16">
        <div className="flex items-center justify-center">
          <div id="avatar" className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src="/profile-image.jpg"
                alt="Sanda Loncar portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white ring-1 ring-zinc-200 shadow-xl object-right"
              />
            </motion.div>

            <motion.span
              className="absolute bottom-2 right-2 text-4xl group-hover:scale-150 group-hover:rotate-6 transition-all duration-500 ease-in-out"
            >
              👋
            </motion.span>
          </div>
        </div>

        <motion.h1
          className="mb-10 mt-8 px-4 text-xl font-medium !leading-[1.5] md:text-3xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Ich bin Sanda</span>. Als praxisorientierte{" "}
          <span className="italic">Unternehmensberaterin</span> und systemische{" "}
          <span className="italic">Coachin</span> helfe ich Ihnen, ihr Unternehmen {" "}
          <span className="underline">erfolgreich</span> in die digitale Zukunft zu führen.
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 dark:bg-white/80 dark:text-black text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition whitespace-nowrap"
            onClick={() => {
              setActiveSection("Kontakt");
              setTimeOfLastClick(Date.now());
            }}
          >
            Kontaktieren Sie mich{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <div className="md:w-full flex flex-col md:flex-row gap-4 md:gap-2 items-center">
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV.pdf"
              download
            >
              Lebenslauf (PDF){" "}
              <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
            </a>
  
            <div className="flex flex-row gap-2 md:gap-4">
              <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="mailto:sanda@sandaloncar.com"
                target="_blank"
              >
                <FaEnvelope />
              </a>
  
              <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/thesandaloncar"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex-col w-screen justify-center items-center gap-4 hidden pt-16 pb-16 md:pb-20 ">
        <p className="text-xs font-semibold opacity-40">Teams & Personen dieser Unternehmen vertrauen mir:</p>
        <LogoSlider />
      </div>
    </section>
  );
}
