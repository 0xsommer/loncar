"use client"

import { motion, useScroll } from "framer-motion";
import React, { useRef } from 'react';
import Leistung from "./leistung";
import SectionHeading from "./section-heading";
import SectionDivider from "./section-divider";
interface LeistungenProps {
}

const Leistungen: React.FC<LeistungenProps> = ({ }) => {

    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start start", "end end"]
    });

    return (
        <section className="relative w-full h-[400svh] md:h-[600svh] flex flex-col md:flex-row items-center justify-center gap-4 mt-8 md:mt-0 md:mb-0">
            <div className="w-full h-full absolute top-0 pb-[60vh] md:pb-0">
                <div className="w-full sticky top-16 flex flex-col items-center gap-0 md:hidden">
                    <SectionHeading>Meine Leistungen</SectionHeading>
                </div>
            </div>
            <div className="w-full h-full flex flex-col md:flex-row md:max-w-3xl gap-8 px-2">
                <div className="hidden md:grid w-1/3 h-[100svh] sticky top-0 grid-leistungen">
                    <h1
                        className="col-start-1 col-end-2 row-start-2 row-end-3 text-2xl font-medium !leading-[1.5] sm:text-3xl dark:text-white text-right pt-8">
                        Strategien
                    </h1>
                </div>
                <div ref={cardRef} className="w-full h-full flex flex-col gap-0 last:pb-80 md:last:pb-0">
                    <Leistung title="entwickeln" description="Gemeinsam mit Ihnen entwickle ich eine klare und konkrete digitale Zukunftsvision für Ihr Unternehmen. Dabei beantworten wir wichtige Fragen wie: Welche digitalen Ergebnisse streben wir an? Wie definieren wir Erfolg? Und warum ist diese Vision für Ihr Unternehmen von entscheidender Bedeutung?" items={["Zielbild", "Interviews", "Analyse", "Moderation"]} index={1} range={[0, 1]} targetScale={0.9} progress={scrollYProgress}/>
                    <Leistung title="validieren" description="Im Validierungsprozess schärfe ich mit Ihnen Ihre vorhandene digitale Strategie, um sicherzustellen, dass sie klar definiert ist. Wir untersuchen, ob Ihre Strategie gut aufgestellt ist? Gibt es Bereiche, die weitere Klarheit benötigen? Wie stark sind Ihre Kunden in dieser Strategie berücksichtigt?" items={["Feedback", " Inputs", "Kundenperspektive", "Klarheit"]} index={2} range={[0.33, 1]} targetScale={0.95} progress={scrollYProgress}/>
                    <Leistung title="umsetzen" description="Ich begleite Sie aktiv bei der Umsetzung Ihrer digitalen Strategie, indem wir gemeinsam definieren: welche strategischen Initiativen gestartet werden müssen? Was für einen Prozess brauchen wir, um mit diesen Initiativen Verbesserungen und Innovationen erfolgreich umzusetzen? Sind Schlüsselkompetenzen definiert? Wie werden wir diese mit den besten Leuten besetzen?" items={["Recruiting", " Prozessdesign", "Coaching", "Experimente"]} index={3} range={[0.66, 1]} targetScale={1} progress={scrollYProgress}/>
                </div>
            </div>
        </section>
    );
};

export default Leistungen;

