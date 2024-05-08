import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Cursor from "@/components/cursor";
import BackButton from "@/components/back-button";
import Hamburger from "@/components/hamburger";
import Blob from "@/components/blob";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanda Loncar | Digital Media Leadership",
  description: "Sanda Loncar ist eine unabhängige Beraterin and Coachin aus Wien, Österreich – spezialisiert auf Digital Leadership in der Medienbranche.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Blob />
        <div className="hidden bg-[#12c2e9] absolute top-[-6rem] -z-10 -right-[8rem] h-[20.25rem] w-[31.25rem] rounded-full blur-[10rem] dark:bg-[#946263] opacity-60"></div>
        <div className="hidden bg-[#c471ed] bg-opacity-70 absolute top-0 z-10 left-0 h-[20.25rem] w-[50rem] rounded-full blur-[10rem] dark:bg-[#676394]"></div>

        <div className="hidden md:fixed left-0 top-0 h-screen w-2 md:w-28 ring-1 ring-zinc-100 bg-gray-100/60 dark:bg-black/20 dark:ring-zinc-300/20"/>
        <div className="hidden md:fixed right-0 top-0 h-screen w-2 md:w-28 ring-1 ring-zinc-100 bg-gray-100/60 dark:bg-black/20 dark:ring-zinc-300/20"/>
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
