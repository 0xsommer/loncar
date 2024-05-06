"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
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
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start start", "end end"] // Adjust these offsets based on when you want the progress to start and end
    });

    return (
        <div ref={cardRef} className="w-full h-[200dvh] pt-[15vh] md:pt-[15vh]">
            <div className="w-full h-min sticky top-[15dvh] md:top-[20vh] flex flex-col gap-8 pt-8 bg-white shadow-lg border border-black/5 rounded-lg dark:text-white dark:bg-white/10">
                <div className="w-full flex flex-col gap-8 px-8">
                    <h1 className="text-2xl font-medium !leading-[1.5] sm:text-3xl flex flex-row gap-4">
                        <span className="flex opacity-0 md:hidden">Strategien</span><span className="italic">{title}</span>
                    </h1>
                    <p>{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {items.map((item, index) => (
                            <motion.li
                                className="bg-black/60 ring-1 ring-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <motion.div
                className=" bg-gradient-to-r from-[#7fffd4]/50 to-[#9370d8]/50 h-1 w-full rounded-full overflow-clip mt-4"
                style={{ scaleX: scrollYProgress }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                />
            </div>
        </div>
    );
};

export default Leistung;