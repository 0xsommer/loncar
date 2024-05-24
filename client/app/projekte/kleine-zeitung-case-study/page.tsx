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
                    <h4 className="font-bold">Kontext</h4>
                    <p>Anfang 2017 habe ich eine neue Aufgabe in der Mediengruppe Styria übernommen: Die Leitung des Bereichs &quot;Digital&quot;.</p>
                    <p>Dieser Bereich wurde nach der Integration der Online-Redaktion in den multimedialen Newsroom und der Einführung von Paid Content neu geschaffen. Die Leistung meiner Rolle wird an KPIs rund um Website-Traffic und digitalen Umsatz gemessen.
                        Nach der Übernahme war meine erste Priorität, die Performance der Produkte Website, Smartphone App und E-Paper zu analysieren und zu verbessern.
                    </p>
                    <p>Die Website <a href="https://kleinezeitung.at">kleinezeitung.at</a> und die dazugehörige App hatten durch die kürzliche Einführung einer Paywall einen schmerzhaften Reichweitenverlust erlitten. Das Daten-Know-how war in der Styria-Gruppe zentralisiert. Auch die Metriken für Marken wie die Kleine Zeitung wurden vom Konzern vorgegeben.
                    </p>
                    <h4 className="font-bold">Herausforderung</h4>
                    <p>In der Redaktion gab es keine Tools, die einen Echtzeit-Einblick in die Performance der Inhalte ermöglichten. Die Redakteure und Kolleg:innen am Desk konnten nicht in Echtzeit sehen, welche Inhalte auf welchen Kanälen top performen und welche unterperformen. Es gab keine Tools, die dies ermöglichten und keine Dashboards, welche die Content-Performance darstellten.

                    </p>
                    <p>Traffic-, Conversion- und Marketingdaten wurden in unterschiedlichen Systemen gespeichert und es gab keine Verbindung zwischen diesen Systemen, um die Daten zu verknüpfen und nutzbar zu machen.

                    </p>
                    <p>Die vom Konzern vorgegebenen Traffic-Ziele wurden nicht auf Ressorts und Kanäle heruntergebrochen. Das hat die Zielerreichung erschwert.
                        Es gab wenige Insights darüber, wo und warum User im Abo-Funnel abspringen.
                        Produktentscheidungen sind hauptsächlich auf Basis von Erfahrung und Bauchgefühl getroffen worden, ohne dabei die Daten heranzuziehen.

                    </p>
                    <h4 className="font-bold">Lösung</h4>
                    <h5>Basics First</h5>
                    <p>Gemeinsam mit dem Datenanalysten und den Entscheidungsträgern in der Redaktion habe ich ein Tool für die Echtzeitanalyse von Inhalten ausgewählt. Dann haben wir das Tool implementiert. Die Redakteure konnten sehen, wie ihre Geschichten auf der Website, in den sozialen Medien, in den Suchmaschinen oder im Newsletter liefen: wie viele Zugriffe ihre Geschichten hatten und wie lange die Leser auf den Geschichten verweilten.
                    </p>
                    <p>So konnte das Desk-Team entscheiden, ob ein Artikel prominenter platziert werden sollte oder ob ein anderer eher von der Startseite in eine Unterkategorie gehört. Das Social-Media-Team konnte einen Beitrag, der gerade eine hohe Reichweite hatte, zusätzlich bewerben.
                    </p>
                    <p>Um das Thema auch strategisch zu verankern, habe ich gemeinsam mit unserem Datenanalysten Abteilungsziele definiert. Diese Ziele beinhalteten Reichweiten- und Konversionsziele. Um diese zu evaluieren, haben wir ein Tracking und Reporting entlang des Abo-Funnels aufgebaut.
                    </p>
                    <p>
                        Mit der Manpower und dem Know-how im Haus war es möglich, Dashboards zu erstellen und On-Demand Insights über User-Flows und andere produktrelevante Fragestellungen zu erhalten. Die genannten Maßnahmen haben wir mit Trainings begleitet, um die Kolleg:innen zu ermächtigen, die Tools und Dashboards selbständig zu nutzen.</p>
                    <h5>Kontinuierliche Weiterentwicklung</h5>
                    <p>Nachdem in allen Unternehmensbereichen, vor allem in der Redaktion und im Lesermarkt, die neuen Möglichkeiten und Chancen der Datennutzung sichtbar wurden, wuchs der Hunger nach mehr Daten. Um diesen Hunger im Unternehmen zu stillen, wurde das Team um weitere Datenanalysten und Data Scientists erweitert. Es war wichtig, die Qualität der Daten sicherzustellen, und so stellten wir auch einen Data Engineer ein, der um eine plattformübergreifende Qualitätssicherung bemüht war.
                    </p>
                    <p>Zweieinhalb Jahre nach der Einführung von Paid Content sind wir an die Grenzen unserer selbstgestrickten technischen Lösung gestoßen. Tests und Experimente mit der Paywall konnten wir nur mit großem Aufwand durchführen. Ich leitete den Evaluierungs- und Entscheidungsprozess für ein Marktsystem für Paid Content ein. Mitten in der Pandemie 2020 haben wir das neue System eingeführt. Neue digitale Abonnementprodukte konnten schnell getestet und eingeführt werden. Außerdem wurde der Registrierungsprozess für die Nutzer vereinfacht. Ein gutes Beispiel dafür, welchen Beitrag Technologie leisten kann, um die Zahl der Abonnements zu erhöhen.

                    </p>
                    <p>Eine weitere wichtige technologische Neuerung war die Einführung einer Data Management Plattform. Diese Technologie ermöglichte die Erstellung von Nutzerprofilen und Publikumssegmenten. Dadurch konnten die digitalen Abo-Kampagnen zielgerichtet ausgespielt werden. In der Folge wurde diese Datenbasis für die zielgruppenspezifische Ausspielung von digitalen Inhalten und Werbung genutzt.

                    </p>
                    <p>Das erwähnte Problem der Daten in unterschiedlichen Systemen wurde durch die Einrichtung eines Data Warehouse gelöst. Das Sammeln und Transformieren von Daten ist mit diesem System einfacher geworden.
                    </p>
                    <p>Es sind interne Daten-Produkte entwickelt worden:
                    </p>

                    <ul>
                        <li>Score für Kaufwahrscheinlichkeit für Digital-Abo Produkte
                        </li>
                        <li>Artikel-Score: eine Metrik für die Redaktion, die Artikel-Performance gemessen hat. Der Score wurde aus den Kennzahlen für Engagement, Loyalität, Conversion und Retention errechnet. Mit dieser einen Metrik konnten wir viele andere Messungen abschaffen, die früher im Einsatz waren und eine Überforderung in der Nutzung dargestellt haben.</li>
                    </ul>
                    <p>Eine kontinuierliche Entwicklung war auch in der Interaktion des Data Teams mit anderen Bereichen notwendig. Es war wichtig, dass die Beteiligten ein gemeinsames Verständnis der gegenseitigen Zuständigkeiten hatten, um in ihren Bereichen entsprechende Ergänzungen in Form von Personal, Werkzeugen und Aktivitäten planen und umsetzen zu können.</p>
                    <p>Es war notwendig, die gegenseitigen Erwartungen und Verantwortlichkeiten immer wieder abzuklären. Die Verantwortlichkeiten des Datenteams waren vor allen:</p>
                    <ul>
                        <li>Anforderungen aus dem Business in Datenanforderungen übersetzen
                        </li>
                        <li>Infrastruktur, Architektur, Tools auswählen, implementieren und warten
                        </li>
                        <li>Daten sammeln, aus unterschiedlichen Tools integrieren, transformieren und nutzbar machen
                        </li>
                        <li>Datenqualität sicherstellen
                        </li>
                        <li>Datenprodukte und Dashboards erstellen und warten
                        </li>
                    </ul>
                    <p>
                        Um Verbesserungspotenziale zu identifizieren und Aktivitäten abzuleiten, haben wir unter anderem regelmäßige Feedbackrunden mit Stakeholdern organisiert. Darüber hinaus haben wir Feedback und Inputs für Verbesserungen durch Umfragen zur Nutzung bestimmter Tools oder Scorecards erhalten.
                    </p>
                    <h4 className="font-bold">Learnings</h4>
                    <p>
                        Bei großen und komplexen Herausforderungen wie der oben beschriebenen ist es wichtig, die Herausforderung in kleine Schritte zu unterteilen und mit den Grundlagen zu beginnen. </p>
                    <p>
                        Neben der fachlichen Expertise sind das Verständnis für das Geschäft und gute Kommunikationsfähigkeiten des Data-Teams die Voraussetzung für den Erfolg. Effektive Datenprodukte können nur in enger Zusammenarbeit mit den Fachabteilungen entwickelt werden. Auf Managementebene war es mir wichtig, den Stakeholdern die Frage zu beantworten: &quot;What&apos;s in it for me&quot;?
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