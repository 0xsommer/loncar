"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  const { ref } = useSectionInView("Kontakt");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-full mb-20 sm:mb-28 text-center scroll-mt-[12rem]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Kontakt
      </SectionHeading>

      <div className="w-full flex flex-col gap-4 pb-20 center">
        <p>Schicken Sie mir eine E-Mail oder buchen Sie gleich einen kostenlosen Termin:</p>

        <a href="mailto:hi@sandaloncar.com" className="text-3xl md:text-7xl underline underline-offset-[1rem] md:underline-offset-[1.5rem] font-semibold">hi@sandaloncar.com</a>
      </div>

      <InlineWidget
        styles={{
          height: '920px',
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '#000000',
          textColor: '4d5055',
        }}
        url="https://calendly.com/sandaloncar/30min?hide_gdpr_banner=1" />
    </motion.section>
  );
}
