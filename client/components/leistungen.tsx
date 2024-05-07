"use client"

import { motion } from "framer-motion";
import React from 'react';
import Leistung from "./leistung";
interface LeistungenProps {
}

const Leistungen: React.FC<LeistungenProps> = ({ }) => {
    return (
        <section className="relative w-full h-[600dvh] flex items-center justify-center gap-4">
            <div className="w-full max-w-3xl h-full flex flex-col md:flex-row gap-0 px-4">
                <div className="w-1/3 h-[100dvh] sticky top-0 flex flex-col justify-start items-start md:items-end p-8 z-50">
                    <div className="hidden bg-[#12c2e9] absolute top-[4rem] -z-10 right-[8rem] h-[20.25rem] w-[31.25rem] rounded-full blur-[10rem] dark:bg-[#946263] opacity-30"></div>
                    <div className="hidden bg-[#FF8C00] bg-opacity-70 absolute top-[-1rem] -z-10 left-[15rem] h-[20.25rem] w-[50rem] rounded-full blur-[10rem] dark:bg-[#676394] opacity-60"></div>
                    <h1
                        className="text-2xl font-medium !leading-[1.5] sm:text-3xl pt-[15vh] md:pt-[20vh] dark:text-white">
                        Strategien
                    </h1>
                </div>
                <div className="w-full h-full flex flex-col gap-0 last:pb-[47vh]">
                    <Leistung title="entwickeln" description="Gemeinsam mit Ihnen entwickle ich eine klare und konkrete digitale Zukunftsvision für Ihr Unternehmen. Dabei beantworten wir wichtige Fragen wie: Welche digitalen Ergebnisse streben wir an? Wie definieren wir Erfolg? Und warum ist diese Vision für Ihr Unternehmen von entscheidender Bedeutung?" items={["Zielbild", "Interviews", "Analyse", "Moderation"]} />
                    <Leistung title="validieren" description="Im Validierungsprozess schärfe ich mit Ihnen Ihre vorhandene digitale Strategie, um sicherzustellen, dass sie klar definiert ist. Wir untersuchen, ob Ihre Strategie gut aufgestellt ist? Gibt es Bereiche, die weitere Klarheit benötigen? Wie stark sind Ihre Kunden in dieser Strategie berücksichtigt?" items={["Feedback", " Inputs", "Kundenperspektive", "Klarheit"]} />
                    <Leistung title="umsetzen" description="Ich begleite Sie aktiv bei der Umsetzung Ihrer digitalen Strategie, indem wir gemeinsam definieren: welche strategischen Initiativen gestartet werden müssen? Was für einen Prozess brauchen wir, um mit diesen Initiativen Verbesserungen und Innovationen erfolgreich umzusetzen? Sind Schlüsselkompetenzen definiert? Wie werden wir diese mit den besten Leuten besetzen?" items={["Recruiting", " Prozessdesign", "Coaching", "Experimente"]} />
                </div>
            </div>
        </section>
    );
};

export default Leistungen;

