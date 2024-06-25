"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

const Statement: React.FC = () => {
    const statementRef = useRef(null);
    const { ref } = useSectionInView("About", 0.3);
    const { scrollYProgress } = useScroll({
        target: statementRef,
        offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0.7, 0.8], [-100, -150]);
    const opacity = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);

    return (
        <section
            className="h-full w-full text-black dark:text-white flex flex-col gap-8 pb-32 md:-mt-[40svh] -mt-[20svh] max-w-3xl items-center justify-center -mb-[200px]"
            ref={statementRef}
            id="about"
        >
            <div 
            ref={ref}
            className="flex flex-col gap-0 items-center">
                <Paragraph paragraph="In einer Zeit, in der digitale Giganten den Ton angeben, glaube ich fest daran, dass journalistische Unternehmen ebenso erfolgreich sein können – und sogar müssen. Denn sie haben einen wichtigen gesellschaftlichen Auftrag zu erfüllen. Mein Ziel ist es, diese Überzeugung in die Tat umzusetzen und das nachhaltige digitale Wachstum journalistischer Medien zu unterstützen." />
                <motion.div
                    style={{ y: y, opacity: opacity }}
                    className="w-full flex flex-col gap-8 max-w-md items-center justify-center text-center px-4 md:px-0 pt-40 md:pt-0">
                    <p className="">Mit meiner einzigartigen Kombination aus Fachwissen stehe ich bereit, Sie auf Ihrem Weg zum Erfolg zu begleiten. Ich baue auf meinem reichen Erfahrungsschatz in der digitalen Transformation und Entwicklung innovativer digitaler Strategien.</p>
                    <p className="">In meiner Arbeitsweise setze ich stets auf einen praktischen und maßgeschneiderten Ansatz und integriere mich bei Bedarf nahtlos in die Teams meiner Kunden, um gemeinsam nachhaltige Erfolge zu erzielen.</p>
                    <motion.a
                        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 mt-8 w-min whitespace-nowrap"
                        href="/cv-loncar-may-2024.pdf"
                        download
                    >
                        Lebenslauf (PDF){" "}
                        <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Statement;

interface ParagraphProps {
    paragraph?: string;
}

const Paragraph = ({ paragraph = "Test" }: ParagraphProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });

    const words = paragraph.split(" ");
    return (
        <div
            ref={container}
            className="h-[300svh] w-full px-2 md:px-8"
        >
            <div className="flex h-[100svh] w-full sticky top-0">
                <div className="w-full self-center flex flex-wrap items-center justify-center font-semibold tracking-tighter text-xl md:text-3xl leading-[1.1] statement">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        // Adjust the range for the first three words to start with full opacity
                        const initialOpacity = i < 3 ? 1 : 0; // Assuming "In einer Zeit," are the first three words
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]} initialOpacity={initialOpacity}>
                                {word}
                            </Word>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const Word = ({
    children,
    progress,
    range,
    initialOpacity = 0
}: {
    children: string;
    progress: any;
    range: any;
    initialOpacity?: number;
}) => {
    const opacity = useTransform(progress, range, [initialOpacity, 1]);
    return (
        <span className="mr-3 mt-3 relative">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity: opacity }}>{children}</motion.span>
        </span>
    );
};
