"use client";

import React, { useRef } from "react";
import { MotionValue, motion, progress, useScroll, useTransform } from "framer-motion";
import { RiLightbulbFlashLine } from "react-icons/ri";
type LeistungProps = {
    title: string;
    description: string;
    items: string[];
    index: number;
    range: number [];
    targetScale: number;
    progress: MotionValue<number>;
};

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

const Leistung: React.FC<LeistungProps> = ({ title, description, items, index, range, targetScale, progress }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(progress, range, [1, targetScale])

    return (
        <div ref={cardRef} className="w-full h-[100svh] md:h-[200svh] sticky top-0 md:block md:top-auto">
            <div className="w-full h-[100svh] sticky top-0 grid grid-leistungen md:!pt-0" style={{ paddingTop: `calc(0px + ${index * 16}px)` }}>
                <motion.div 
                style={{scale}}
                className="w-full h-full col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col gap-8 justify-between pt-6 pb-6 md:pt-8 md:pb-0 bg-white md:!scale-100 shadow-lg border border-black/5 rounded-xl dark:text-black md:dark:text-white dark:bg-gray-200 md:dark:bg-white/10 dark:border-black/10 md:dark:border-white/10">
                    <div className="w-full flex flex-col gap-6 md:gap-8 px-6 md:px-8">
                       <div className="w-full flex flex-row justify-between">
                            <h1 className="text-2xl md:text-3xl font-medium !leading-[1.5] flex flex-row gap-2">
                                <span className="md:hidden">Strategien</span><span className="underline underline-offset-4">{title}</span>
                            </h1>
                       </div>
                        <p className="opacity-100 leading-6 text-sm md:text-base">{description}</p>
                        <ul className="flex flex-wrap gap-2 sm:mt-auto">
                            {items.map((item, index) => (
                                <motion.li
                                    className="bg-black/5 ring-1 ring-black/10 px-3 py-1 text-[0.6rem] uppercase tracking-wider rounded-full text-black"
                                    key={index}
                                    custom={index}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                    className="hidden md:block bg-gradient-to-r from-[#7fffd4]/50 to-[#9370d8]/50 h-1 w-full rounded-full overflow-clip mt-4"
                    style={{ scaleX: scrollYProgress }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Leistung;