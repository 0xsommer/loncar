import klzImg from "@/public/klz.png";
import sata from "@/public/24sata.png";
import futter from "@/public/futter.png";

export const links = [
  {
    name: "Start",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projekte",
    hash: "/#projekte",
  },
  {
    name: "Leistungen",
    hash: "/#leistungen",
  },
  {
    name: "Kontakt",
    hash: "/#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Kleine Zeitung",
    logo: "/logos/klz.png",
    description:
    "Mit einer soliden organisatorischen und technologischen Datenbasis wurden bei der Kleinen Zeitung fundierte Entscheidungen und nachhaltiges digitales Wachstum ermöglicht.",
    tags: ["Data Driven", , "Data Management", "Analytics", "Informierte Entscheidungen"],
    imageUrl: klzImg,
    link: "/projekte/kleine-zeitung-case-study",
  },
  {
    title: "24sata digital",
    logo: "/logos/24sata.png",
    description:
      "Unter meiner Leitung hat sich 24sata.hr innerhalb von fünf Jahren von Null zur dominierenden Nummer eins im kroatischen Digitalmarkt entwickelt.",
    tags: ["Strategie", "Führung", "Digitalisierung", "Produktentwicklung", "Digitale Transformation"],
    imageUrl: sata,
    link: "projekte/24sata-strategie-case-study",
  },
  {
    title: "Futter",
    logo: "/logos/futter.png",
    description:
      "Dank der Zusammenarbeit mit einem engagierten Team hat sich das interne Inkubationsprojekt Futter zu einem Leuchtturmprodukt für eine junge Zielgruppe entwickelt.",
    tags: ["Strategie", "Coaching", "Produktentwicklung", "Projektmanagement", "Hiring"],
    imageUrl: futter,
    link: "/projekte/futter-kleine-zeitung-case-study",
  },
] as const;

export const skillsData = [
  "Strategie",
  "Digitalisierung",
  "Produktentwicklung",
  "Coaching",
  "Moderation",
  "Transformation",
  "Führung",
  "Hiring",
  "Prozessmanagement",
  "Projektmanagement",
  "Entwicklungsprozesse",
  "Dokumentation",
] as const;

export const articleContent = [
  {
    content: "<p>Nach über zehn Relaunch-Projekten mit unterschiedlichen Zeitungsmarken fand ich mit der Kleinen Zeitung das Rezept für ein stressreduziertes Relaunch-Projekt.</p>Die Zutaten für den Erfolg waren:\nProduktstrategie erarbeiten und mit den Stakeholdern abstimmen\nDie Frage “Was wollen wir mit dem Relaunch erreichen?” konkret und messbar beantworten\nIn der Umsetzung stark auf die Ziele aus dem Punkt 2 fokussieren\nBestehende und neue User aktiv in das Projekt einbinden, um Ideen zu validieren\nBalance zwischen Inhalt, Abo und Vermarktung finden\n\nDamit das alles gelingt, war es wichtig, die Produkte Webseite und App ganzheitlich zu denken.Das bedeutet:\n- Produktideen und Neuerungen mit den Usern abzutesten\n- Redaktionelle Bedürfnisse an Storytelling - Formaten abzuholen\n- Monetarisierung durch Abo und Vermarktung effizient implementieren\nIn allen angeführten Aktivitäten haben wir auf Basis eines robusten Daten - Framework entschieden.Da hat sich die mehrjährige Investition in den Aufbau eines kompetenten Data - Teams bezahlt gemacht.\n\nDas erfahrene Entwicklerteam hat nach allen Regeln der Kunst die Suchmaschinen - Regeln implementiert.Dadurch hat unsere Webseite nach dem Go Live nicht an einem Traffic - Rückgang gelitten.Im Gegenteil, nur ein paar Wochen nach dem Relaunch, haben sowohl die Zugriffe als auch die Umsatzzahlen nach oben entwickelt.",
    title: "Kleine Zeitung: Mission Data",
    logo: "/logos/klz.png",
    intro: "Mit einer soliden organisatorischen und technologischen Datenbasis wurden bei der Kleinen Zeitung fundierte Entscheidungen und nachhaltiges digitales Wachstum ermöglicht.",
    tags: ["Data Driven", , "Data Management", "Analytics", "Informierte Entscheidungen"],
    imageUrl: klzImg
  },
{
  content: "This is content 24sata.",
    title: "24sata: From Zero to Hero",
      logo: "/logos/24sata.png",
        intro:
  "Unter meiner Leitung hat sich 24sata.hr innerhalb von fünf Jahren von Null zur dominierenden Nummer eins im kroatischen Digitalmarkt entwickelt.",
    tags: ["Strategie", "Führung", "Digitalisierung", "Produktentwicklung", "Digitale Transformation"],
      imageUrl: sata,
  },
{
  content: "This is content Futter.",
    title: "Futter: Ein inkurbiertes Leuchtturmprojekt",
      logo: "/logos/futter.png",
        intro:
  "Dank der Zusammenarbeit mit einem engagierten Team hat sich das interne Inkubationsprojekt Futter zu einem Leuchtturmprodukt für eine junge Zielgruppe entwickelt",
    tags: ["Strategieentwicklung", "Strategieumsetzung", "Teamentwicklung"],
      imageUrl: futter,
  },
] as const ;

