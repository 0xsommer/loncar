import klzImg from "@/public/klz.png";
import sata from "@/public/24sata.png";
import futter from "@/public/futter.png";

export const links = [
  {
    name: "Start",
    hash: "/#home",
  },
  {
    name: "Ansatz",
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
      "Nach über zehn Relaunch-Projekten mit unterschiedlichen Zeitungsmarken fand ich mit der Kleinen Zeitung das Rezept für ein stressreduziertes Relaunch-Projekt.",
    tags: ["Transformation", , "Produktentwicklung", "Führung", "Projektmanagement", "Moderation"],
    imageUrl: klzImg,
    link: "/projekte/kleine-zeitung-relaunch-case-study",
  },
  {
    title: "24sata digital",
    logo: "/logos/24sata.png",
    description:
      "From Zero to Hero: Als Geschäftsführerin von 24sata digital habe ich das Newsportal innerhalb von zwei Jahren zur dominanten Nummer eins im kroatischen Digitalmarkt gemacht.",
    tags: ["Strategie", "Führung", "Digitalisierung", "Produktentwicklung"],
    imageUrl: sata,
    link: "/projects/24sata",
  },
  {
    title: "Futter",
    logo: "/logos/futter.png",
    description:
      "Gemeinsam mit einem jungen und motivierten Team habe ich ein internes Inkubationsprojekt zu einem Vorzeige-Produkt für eine junge Zielgruppe skaliert.",
    tags: ["Strategie", "Coaching", "Produktentwicklung", "Projektmanagement", "Hiring"],
    imageUrl: futter,
    link: "/projects/futter",
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
    title: "Ein Relaunch ohne Herzinfarkt",
    logo: "/logos/klz.png",
    intro: "Nach über zehn Relaunch-Projekten mit unterschiedlichen Zeitungsmarken fand ich mit der Kleinen Zeitung das Rezept für ein stressreduziertes Relaunch-Projekt.",
    tags: ["Transformation", "Produktentwicklung", "Führung", "Projektmanagement", "Moderation"],
    imageUrl: klzImg
  },
{
  content: "This is content 24sata.",
    title: "24sata digital",
      logo: "/logos/24sata.png",
        intro:
  "From Zero to Hero: Als Geschäftsführerin von 24sata digital habe ich das Newsportal innerhalb von zwei Jahren zur dominanten Nummer eins im kroatischen Digitalmarkt gemacht.",
    tags: ["Strategie", "Führung", "Digitalisierung", "Produktentwicklung"],
      imageUrl: sata,
  },
{
  content: "This is content Futter.",
    title: "Futter",
      logo: "/logos/futter.png",
        intro:
  "Gemeinsam mit einem jungen und motivierten Team habe ich ein internes Inkubationsprojekt zu einem Vorzeige-Produkt für eine junge Zielgruppe skaliert.",
    tags: ["Strategie", "Coaching", "Produktentwicklung", "Projektmanagement", "Hiring"],
      imageUrl: futter,
  },
] as const ;