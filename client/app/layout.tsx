import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import BackButton from "@/components/back-button";
import Hamburger from "@/components/hamburger";
import Blob from "@/components/blob";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanda Loncar | Digital Media Leadership",
  description: "Sanda Loncar ist eine unabhängige Beraterin and Coachin aus Wien, Österreich – spezialisiert auf Digital Leadership in der Medienbranche.",
  metadataBase: new URL('https://sandaloncar.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Blob />

        <div className="hidden md:block fixed left-0 top-0 h-screen w-2 md:w-28 ring-1 ring-zinc-100 bg-gray-100/40 dark:bg-black/10 dark:ring-zinc-300/10"/>
        <div className="hidden md:block fixed right-0 top-0 h-screen w-2 md:w-28 ring-1 ring-zinc-100 bg-gray-100/40 dark:bg-black/10 dark:ring-zinc-300/10"/>
        <Hamburger />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <ThemeSwitch />
            <BackButton />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
