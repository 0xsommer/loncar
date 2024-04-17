"use client"

import { motion } from "framer-motion";
import React from 'react';
import Leistung from "./leistung";
interface LeistungenProps {
}

const Leistungen: React.FC<LeistungenProps> = ({ }) => {
    return (
        <section className="relative w-full h-[300dvh] flex items-center justify-center gap-4">
            <div className="w-full max-w-3xl h-full flex flex-col md:flex-row gap-0 px-4 md:px-0">
                <div className="w-1/3 h-[100dvh] sticky top-0 flex flex-col justify-start items-start md:items-end p-8">
                <div className="bg-[#c471ed] absolute top-[4rem] -z-10 right-[8rem] h-[20.25rem] w-[31.25rem] rounded-full blur-[10rem] dark:bg-[#946263] opacity-40"></div>
                <div className="bg-[#12c2e9] bg-opacity-70 absolute top-[-1rem] -z-10 left-[15rem] h-[20.25rem] w-[50rem] rounded-full blur-[10rem] dark:bg-[#676394] opacity-60"></div>
                    <h1
                        className="text-2xl font-medium !leading-[1.5] sm:text-3xl pt-[15vh] md:pt-[25vh]">
                        Strategien
                    </h1>
                </div>
                <div className="w-full h-full flex flex-col gap-0 last:pb-[47vh]">
                    <Leistung title="entwickeln" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." items={["Strategie", " Moderation"]} />
                    <Leistung title="validieren" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." items={["Strategie", " Moderation"]} />
                    <Leistung title="umsetzen" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." items={["Strategie", " Moderation"]} />
                </div>
            </div>
        </section>
    );
};

export default Leistungen;

