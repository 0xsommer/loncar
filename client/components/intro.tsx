"use client";

import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsArrowDownShort } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { HiDownload } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import LogoSlider from "./logo-slider";

export default function Intro() {
  const { ref } = useSectionInView("Start", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.065], [0.6, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.085], [0, 100]);

  return (
    <section
      ref={ref}
      id="home"
      className="h-dvh md:h-screen mb-28 text-center sm:mb-0 scroll-mt-[100rem] items-center justify-between flex flex-col"
    >
      <div className="flex flex-col h-full w-full max-w-3xl gap-4 justify-center items-center pb-0">
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
                className="h-28 w-28 rounded-full object-cover ring-4 ring-zinc-200 shadow-xl object-right"
              />
            </motion.div>

            <motion.span
              className="absolute bottom-0 right-0 text-4xl group-hover:scale-150 group-hover:rotate-6 transition-all duration-500 ease-in-out"
            >
              👋
            </motion.span>
          </div>
        </div>

        <div className="flex flex-col gap-0 items-center justify-center">
          <motion.h1
            className="mb-10 mt-8 px-4 text-xl font-medium !leading-[1.5] md:text-2xl max-w-xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Ich bin Sanda</span>. Als praxisorientierte{" "}
            <span className="">Unternehmensberaterin</span> und systemische{" "}
            <span className="">Coachin</span> helfe ich Ihnen, ihr Unternehmen {" "}
            <span className="">erfolgreich</span> in die digitale Zukunft zu führen.
          </motion.h1>
  
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
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
  
            <div className="md:w-full flex flex-col md:flex-row gap-6 md:gap-2 items-center">
  
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
      </div>
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      style={{ opacity, translateY }}
      className="flex flex-col gap-2 justify-center items-center pb-16 md:pb-28">
        <p className="uppercase text-xs text-[10px] tracking-wider">Mehr erfahren</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <MdKeyboardDoubleArrowDown size={18}/>
        </motion.div>
      </motion.div>

      <div className="flex-col w-screen justify-center items-center gap-4 hidden pt-16 pb-16 md:pb-24">
        <p className="text-xs font-semibold opacity-40">Teams & Personen dieser Unternehmen vertrauen mir:</p>
        <LogoSlider />
      </div>
    </section>
  );
}
