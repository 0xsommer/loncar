"use client";

import React from "react";
import { motion } from "framer-motion";

type LeistungProps = {
    title: string;
    description: string;
    items: string[];
};

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

const Leistung: React.FC<LeistungProps> = ({ title, description, items }) => {
    return (
        <div className="w-full h-[200dvh] pt-[15vh] md:pt-[15vh]">
            <div className="w-full h-min sticky top-[15dvh] md:top-[20vh] flex flex-col gap-8 bg-white ring-1 ring-zinc-100  dark:ring-zinc-300/20 p-8 rounded-2xl dark:text-black border shadow-lg shadow-slate-300/20">
                <h1
                    className="text-2xl font-medium !leading-[1.5] sm:text-3xl flex flex-row gap-4">
                    <span className="flex opacity-0 md:hidden">Strategien</span><span className="italic">{title}</span>
                </h1>
                <p>{description}</p>
                <ul className="flex flex-wrap justify-left gap-2 text-sm md:text-lg text-gray-800">
                    {items.map((item, index) => (
                        <motion.li
                            className="bg-white borderBlack rounded-xl px-4 py-2 md:px-5 md:py-3 dark:bg-black/10 dark:text-black/80"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Leistung;
