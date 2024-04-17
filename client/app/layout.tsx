import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Cursor from "@/components/cursor";
import BackButton from "@/components/back-button";
import Hamburger from "@/components/hamburger";

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
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#12c2e9] absolute top-[-6rem] -z-10 right-[11rem] h-[20.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] opacity-60"></div>
        <div className="bg-[#c471ed] bg-opacity-70 absolute top-[-1rem] -z-10 left-[-35rem] h-[20.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] opacity-60"></div>

        <div className="fixed inset-0 flex justify-center px-2 md:px-20 -z-20">
          <div className="flex w-full lg:px-8">
            <div className="w-full bg-white/50 ring-1 ring-zinc-100 dark:bg-black/10 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <Cursor />
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
