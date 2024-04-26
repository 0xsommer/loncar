"use client"

import BlogArticle from "@/components/blog-article";
import { articleContent } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Project from "@/components/project";
import { projectsData } from "@/lib/data";
import SectionHeading from "@/components/section-heading";

const Article = () => {
    const { ref } = useSectionInView("Projekte", 0.1);
    const Article = articleContent[2];
    const klzProject = projectsData.find(project => project.title === 'Kleine Zeitung');
    const sataProject = projectsData.find(project => project.title === '24sata digital');

    return (
        <div className="w-full flex flex-col items-center gap-20" id="projekte">
            <article className="w-full max-w-[60ch] items-center justify-center flex flex-col gap-16 pt-32">
                <BlogArticle
                    content={Article.content}
                    logo={Article.logo}
                    title={Article.title}
                    intro={Article.intro}
                    tags={Article.tags}
                    imageUrl={Article.imageUrl}
                />
                <div className="w-full flex flex-col gap-4 article">
                    <h4 className="font-bold">Kontext</h4>
                    <p>Wie viele etablierte Zeitungsverlage mit einer langen Tradition im Printbereich, hat auch die Kleine Zeitung versucht, ihre Inhalte und Angebote für eine jüngere Zielgruppe attraktiv zu gestalten. So wurde 2016 die Marke Futter ins Leben gerufen, um die Altersgruppe der 18 bis 24-Jährigen anzusprechen. Sowohl als gedrucktes als auch digitales Produkt konzipiert, versuchte das junge Magazin der Kleinen Zeitung Themen abzudecken, die für junge Menschen von Bedeutung sind. Themen wie Studieren, Klimawandel, Nachhaltigkeit, Spiele, Restaurant-Tipps.</p>
                    <p>Zwei Jahre nach der Gründung von Futter, übernahm ich in meiner Funktion als Head of Digital der Kleinen Zeitung die Verantwortung für die Weiterentwicklung von Futter.</p>
                    <h4 className="font-bold">Herausforderung</h4>
                    <ul>
                        <li>Impact der gedruckten Ausgabe stand in keinem Verhältnis zu den eingesetzten Ressourcen.</li>
                        <li>Es gab kein dediziertes Futter-Team. Die Produktion und Distribution von Inhalten erfolgte durch Freelancer, die von einer Person koordiniert wurden.</li>
                        <li>Für Werbekunden wurden keine speziellen digitalen Produkte entwickelt, Vermarktung lief über Run-Over-Network Kampagnen. Der Umsatz war dementsprechend auf einem niedrigen Niveau.</li>
                        <li>Die Reichweite auf Social Media war bescheiden. Der Fokus lag auf Facebook, obwohl Instagram bei der Zielgruppe beliebter war.</li>
                        <li>Clickbaiting und Typos haben sich in die Futter-Inhalte eingeschlichen, was nicht dem Qualitätsanspruch der Kleinen Zeitung entsprach.</li>
                    </ul>
                    <h4 className="font-bold">Strategie</h4>
                    <p>Gemeinsam mit zwei Kollegen, die zur Zielgruppe gehörten, habe ich eine neue Positionierung für Futter erarbeitet, die auf relevante Inhalte für junge Menschen setzte. Auf Basis der neuen Positionierung habe ich einen groben Business Case errechnet und der schaute versprechend aus. Break-Even im zweiten Jahr.</p>
                    <p>Der erste und wichtigste Umsetzungsschritt war die Zusammenstellung eines jungen und engagierten Teams für Futter, bestehend aus Millennials und Digital Natives. Produktmanagerin, Redaktionsleiterin, zwei Redakteurinnen und Social Media Manager bildeten das neue Futter-Team. Nach dem Motto “Zielgruppe bietet Service für Zielgruppe an” war das Team Teil des Zielpublikums.</p>
                    <p>Wie ging es weiter?</p>
                    <ol>
                        <li>Mit der Produktmanagerin und der Redaktionsleiterin habe ich Content- und Produktstrategien erarbeitet. Fokus auf digitale Kanäle, allen voran Instagram und Webseite, Einstellung der gedruckten Ausgabe, Qualität statt Quantität und ein journalistischer Ansatz auf Augenhöhe mit den Lesern. Nachhaltigkeit, Klima und sonstige für das Zielpublikum relevante Themenschwerpunkte, die einfach und lebensnah erklärt werden.</li>
                        <li>Mit dem Verkaufsteam wurden Werbeformate abgestimmt sowie neue Produkte für Werbemarkt-Kunden entwickelt.</li>
                        <li>Eine Reihe digitaler und analoger Marketingaktivitäten für Leser und Werbetreibende wurde erarbeitet und umgesetzt. Diese reichten von Gewinnspielen mit tollen Preisen über eigene oder gesponserte offline Events bis zu coolen Merchandising Artikeln.</li>
                    </ol>
                    <p>In all diesen Schritten haben wir unsere Aktivitäten auf die Bedürfnisse der Zielgruppe abgeklopft.</p>
                    <h4 className="font-bold">Ergebnisse</h4>
                    <p>Bald nach dem Neustart hat sich das Team als internes Kompetenzzentrum für junge Zielgruppe etabliert. Auch extern war Futter als glaubwürdige Quelle für die auf Young Audience orientierten Inhalte anerkannt. So wurde 2020 das Team von einem Fernsehsender mit der Produktion einer wöchentlichen preisgekrönten Nachrichtensendung beauftragt. Die Sendung hat Inhalte aufbereitet, die für das Zielpublikum relevant waren und hat sich sehr positiv auf den Deckungsbeitrag des Produktes ausgewirkt.</p>
                    <p>Die KPIs entwickelten sich hervorragend:</p>
                    <ul>
                        <li>Die Reichweite auf Instagram wurde verdoppelt.</li>
                        <li>Langfristige Kooperationen mit Werbekunden, die eine jüngere Zielgruppe ansprechen wollten, wurden vereinbart.</li>
                        <li>Verweildauer auf Artikeln wurde um 40% gesteigert.</li>
                    </ul>
                    <h4 className="font-bold">Ausblick</h4>
                    <p>Vor dem Hintergrund der digitalen Transformation des gesamten Unternehmens Kleine Zeitung und des Wunsches, auch junge Leser mit den Inhalten und Produkten unter der Marke Kleine Zeitung anzusprechen, stellte ich 2022 proaktiv die Frage nach der Zukunft von Futter.</p>
                    <ul>
                        <li>Brauchen wir eine eigenständige Marke, um mit den jungen Lesern zu kommunizieren?</li>
                        <li>Wie können wir die Expertise des jungen Teams skalieren und für alle Bereiche des Unternehmens zugänglich machen?</li>
                    </ul>
                    <p>In einem strukturierten Prozess im Management Board wurden die nächsten Schritte für Futter festgelegt:</p>
                    <ul>
                        <li>Futter wird zu Kleine Zeitung Next umfirmiert, wobei Next für die nächste Generation an Inhalten der Kleinen Zeitung steht.</li>
                        <li>Das Team wurde in Redaktion und Marketing der Kleinen Zeitung integriert</li>
                        <li>Es ist ein Prozess aufgestellt, damit die Mitglieder des Futter Teams mit Kollegen aus anderen Bereichen Inhalte, Produkte und Marketing-Aktivitäten für die junge Zielgruppe entwickeln und umsetzen können.</li>
                    </ul>
                    <h4 className="font-bold">Learnings</h4>
                    <ol>
                        <li>Es steht und fällt mit den richtigen Leuten auf den richtigen Positionen: Es war entscheidend, dass jedes Teammitglied nicht nur über die richtigen Fähigkeiten verfügte, sondern auch mit Leidenschaft und Engagement für das Projekt eintrat.</li>
                        <li>Klare Rahmenbedingungen setzen und Freiheit zulassen. Rahmen und Ziele waren festgelegt, den Teammitglieder wurden die Freiheiten gegeben, um kreative Lösungen zu finden und Verantwortung für ihre Arbeit zu übernehmen</li>
                        <li>Regelmäßig reflektieren, ob wir das richtige tun und Anpassungen vornehmen. Flexibilität und Anpassungsfähigkeit waren Schlüssel zum Erfolg</li>
                    </ol>
                </div>
            </article>
            <div className="flex flex-col gap-4 mt-32">
                <SectionHeading>Weitere Projekte</SectionHeading>
                {klzProject && <Project {...klzProject} />}
                {sataProject && <Project {...sataProject} />}
            </div>
        </div>
    );
};

export default Article;