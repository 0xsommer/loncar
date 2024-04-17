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
    const Article = articleContent[1];
    const klzProject = projectsData.find(project => project.title === 'Kleine Zeitung');
    const futterProject = projectsData.find(project => project.title === 'Futter');

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
                    <p>24sata ist ein international bekanntes und in Kroatien führendes Medienunternehmen. 24sata steht für innovative Pionierarbeit auf dem Medienmarkt. Nur drei Jahre nach der im Jahr 2005 erfolgten Gründung, ist es dem jungen und motivierten Team gelungen, die gedruckte Version von 24sata zur meistverkauften und reichweitenstärksten Tageszeitung Kroatiens zu machen. </p>
                    <p>Ein Grund zum Feiern und zum Starten der seriösen Positionierung in der digitalen Arena. Ich hatte das Privileg, von 2007 bis Ende 2014 die digitale Transformation dieses Unternehmens zu leiten.</p>
                    <h4 className="font-bold">Herausforderung</h4>
                    <p>Inmitten eines gesättigten Marktes und der wachsenden Konkurrenz durch digitale News-Portale wollten wir 24sata als führende digitale Marke auf dem kroatischen Markt positionieren und gleichzeitig den wirtschaftlichen Erfolg erzielen. Die Marke 24sata wurde damals von großen Werbemarkt-Kunden, vor allem aus den Segmenten Finanzwesen und Gesundheit, als Tabloid wahrgenommen. Dies führte dazu, dass 24sata.hr in ihren Werbebudgets oft nicht berücksichtigt wurde.</p>
                    <h4 className="font-bold">Lösung</h4>
                    <p>Das Kernprodukt 24sata.hr als Challenger unter den News-Portalen brachte kontinuierlich Neuerungen auf den Markt und war nah an den Lesern. Durch Erweiterung des Produktportfolios wurden neue Zielgruppen gewonnen.</p>
                    <p>Was ist konkret gelungen?</p>
                    <ol>
                        <li>Starke Kundenzentrierung:
                            <ul>
                                <li>24sata setzte früh auf User Generated Content, eine Sektion, die schnell beliebt wurde. Zahlreiche Videos und Fotos der Leser sind als Aufmacher für die Webseite und auf der Titelseite der Zeitung benutzt worden.</li>
                                <li>User Experience spielte eine große Rolle bei den Weiterentwicklungen des Produktes. Die Investition in interne und externe Spezialisten im Bereich UX/UI haben sich durch steigende Besucherzahlen und längere Verweildauer bezahlt gemacht.</li>
                                <li>Aktives Moderieren der User-Kommentare durch das Community-Team von 24sata führte zu guten Diskussionen, wo Haters und Trolls nichts verloren haben.</li>
                                <li>Entwicklung und Testen von innovativen Werbeformaten gemeinsam mit den Werbekunden: Product Placement Formate, Sponsorings, Integration der Kunden in Community-Challenges u.v.m.</li>
                            </ul>
                        </li>
                        <li>Trends aufspüren und entsprechende Angebote entwickeln:
                            <ul>
                                <li>Der Trend zum mobilen Konsum der Inhalte wurde früh erkannt und eine nutzerfreundliche mobile Webseite und App sind auf den Markt gebracht.</li>
                                <li>24sata war die erste Medienmarke in Kroatien, die eine Facebook Page etablierte und ihre Nutzer auch auf diesem Kanal abgeholt hat.</li>
                                <li>Erstellung von Video-Inhalten ohne aufwendige Produktionskosten. Live Streams mit einem Laptop im Rucksack und einer Kamera in der Hand haben unseren Usern ein hautnahes Erlebnis großer Ereignisse ermöglicht.</li>
                            </ul>
                        </li>
                        <li>Erweiterung des digitalen Portfolios:
                            <ul>
                                <li>Schnelle Konzipierung und Umsetzung einer Reihe von Community-Webseiten, digitalen Produkten für spezielle Zielgruppen. Das Ziel dieser Produkte war, Mehrwert sowohl für die Leser- als auch für die Werbekunden zu schaffen.</li>
                                <li>Das Portfolio an zusätzlichen Produkten reichte von persönlichen Finanzen über Kochen, Gesundheit und Mode bis zum Parenting und wurde durch Eigenentwicklungen und M&A erweitert.</li>
                                <li>Durch smartes Verlinken zwischen dem News-Portal und den Special Interest Webseiten haben wir ein digitales Ökosystem geschaffen. Dies führte zur Stärkung der dominanten Position auf dem kroatischen digitalen Markt.</li>
                            </ul>
                        </li>
                    </ol>
                    <h4 className="font-bold">Ergebnisse</h4>
                    <ol>
                        <li>24sata.hr ist 2012 mit damals 920.000 Real Users die reichweitenstärkste kroatische Webseite geworden</li>
                        <li>Jedes Special Interest Produkt hat eine starke Position in seiner Nische eingenommen (Rang 1 oder 2) und steuerte einen wesentlichen Beitrag zum EGT bei</li>
                        <li>Die dominante Position wurde durch Vermarktung und unterschiedliche Community-Projekte und -Challenges monetarisiert, in welche Leser und Kunden einbezogen wurden</li>
                        <li>Im B2C Bereich haben wir unterschiedliche Produkte und Services unserer Partner im Revenue-Share-Modell an unsere User verkauft</li>
                        <li>EGT der digitalen Operations ist seit 2011 positiv</li>
                    </ol>
                    <h4 className="font-bold">Learnings</h4>
                    <ol>
                        <li>Schlüsselpositionen in Bereichen Redaktion, Verkauf, Technologie, Business Development und Marketing stark besetzt. Das war entscheidend für den Erfolg.</li>
                        <li>Vertrauensvolle Zusammenarbeit zwischen allen Unternehmensbereichen schaffen</li>
                        <li>Kurze Kommunikations- und Entscheidungswege etablieren. Das ermöglicht schnelles Handeln und Reagieren auf Marktveränderungen.</li>
                        <li>Starke Marktorientierung, um Trends früh aufzuspüren und in Produkte und Dienstleistungen zu übersetzen.</li>
                        <li>Rahmenbedingungen für schnelles Experimentieren und Umsetzen schaffen</li>
                    </ol>
                    <p>
                        Mit 24sata habe ich bewiesen, dass es möglich ist, ein digitales Medienprodukt auf den Markt zu bringen, das von den Lesern geliebt wird und zugleich wirtschaftlich erfolgreich ist. Digitale Produkte und Projekte von 24sata sind mehrfach international prämiert worden.</p>
                    <p>
                        Mein Beitrag zu diesem Erfolg war vor allem in der Strategieentwicklung und im Schaffen der Rahmenbedingungen für die Umsetzung der Strategie.</p>
                </div>
            </article>
            <div className="flex flex-col gap-4 mt-32">
                <SectionHeading>Weitere Projekte</SectionHeading>
                {klzProject && <Project {...klzProject} />}
                {futterProject && <Project {...futterProject} />}
            </div>
        </div>
    );
};

export default Article;