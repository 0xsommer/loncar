"use client"

import BlogArticle from "@/components/blog-article";
import Projects from "@/components/projects";
import { articleContent } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Project from "@/components/project";
import { projectsData } from "@/lib/data";
import SectionHeading from "@/components/section-heading";

const Article = () => {
    const { ref } = useSectionInView("Projekte", 0.1);
    const firstArticle = articleContent[0];
    const sataProject = projectsData.find(project => project.title === '24sata digital');
    const futterProject = projectsData.find(project => project.title === 'Futter');

    return (
        <div className="w-full flex flex-col items-center gap-20" id="projekte">
        <article className="w-full max-w-[60ch] items-center justify-center flex flex-col gap-16 pt-32">
            <BlogArticle
                content={firstArticle.content}
                logo={firstArticle.logo}
                title={firstArticle.title}
                intro={firstArticle.intro}
                tags={firstArticle.tags}
                imageUrl={firstArticle.imageUrl}
            />
            <div className="w-full flex flex-col gap-4 article">
                <p>Nach über zehn Relaunch-Projekten mit unterschiedlichen Zeitungsmarken fand ich mit der Kleinen Zeitung das Rezept für ein stressreduziertes Relaunch-Projekt.</p>
                <p>Die Zutaten für den Erfolg waren:</p>
                <ol>
                    <li>Produktstrategie erarbeiten und mit den Stakeholdern abstimmen</li>
                    <li>Die Frage “Was wollen wir mit dem Relaunch erreichen?” konkret und messbar beantworten</li>
                    <li>In der Umsetzung stark auf die Ziele aus dem Punkt 2 fokussieren</li>
                    <li>Bestehende und neue User aktiv in das Projekt einbinden, um Ideen zu validieren</li>
                    <li>Balance zwischen Inhalt, Abo und Vermarktung finden</li>
                </ol>
                <p>Damit das alles gelingt, war es wichtig, die Produkte Webseite und App ganzheitlich zu denken. Das bedeutet:</p>
                <ul>
                    <li>Produktideen und Neuerungen mit den Usern abzutesten</li>
                    <li>Redaktionelle Bedürfnisse an Storytelling-Formaten abzuholen</li>
                    <li>Monetarisierung durch Abo und Vermarktung effizient implementieren</li>
                </ul>
                <p>
                    In allen angeführten Aktivitäten haben wir auf Basis eines robusten Daten-Framework entschieden. Da hat sich die mehrjährige Investition in den Aufbau eines kompetenten Data-Teams bezahlt gemacht.
                </p>
                <p>
                    Das erfahrene Entwicklerteam hat nach allen Regeln der Kunst die Suchmaschinen-Regeln implementiert. Dadurch hat unsere Webseite nach dem Go Live nicht an einem Traffic-Rückgang gelitten. Im Gegenteil, nur ein paar Wochen nach dem Relaunch, haben sowohl die Zugriffe als auch die Umsatzzahlen nach oben entwickelt.
                </p>
            </div>
        </article>
        <div className="flex flex-col gap-4 mt-32">
        <SectionHeading>Weitere Projekte</SectionHeading>
            {sataProject && <Project {...sataProject} />}
            {futterProject && <Project {...futterProject} />}
        </div>
        </div>
    );
};

export default Article;