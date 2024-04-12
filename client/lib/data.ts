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
    name: "Expertise",
    hash: "/#skills",
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
    link: "/projects/klz",
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
