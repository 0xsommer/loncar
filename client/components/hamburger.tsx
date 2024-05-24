"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { BsList, BsXLg } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false); // Add state
  const pathname = usePathname()
  const router = useRouter()

  const toggleNav = () => {
    setIsOpen(!isOpen); // Toggle state on button click
  };

  // Don't render the button if we're on the home page
  if (pathname !== '/') {
    return null;
  }

  return (
    <>
      <button
        onClick={toggleNav} // Add click handler
        className="md:hidden fixed top-4 left-4 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-200 dark:border-gray-100/50 shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition-all dark:bg-gray-950 cursor-pointer z-50"
      >
        {isOpen ? <BsXLg /> : <BsList />} {/* Conditionally render icon */}
      </button>
      {isOpen && ( // Conditionally render navigation
        <nav className="fixed top-0 left-0 flex h-full p-4 pt-20 w-full justify-start items-start sm:py-0 z-40 bg-gradient-to-b dark:from-black/80 dark:to-black/10 from-white/80 to-white/10">
          <ul className="flex w-min flex-col items-start justify-end font-medium text-gray-500 gap-3">
            {links.map((link) => (
              <motion.li
                className="flex items-center justify-center relative bg-white shadow-2xl rounded-full border border-gray-200 dark:border-gray-100/50 dark:bg-gray-950"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-4 py-2 hover:text-gray-950 transition dark:text-gray-200 dark:hover:text-gray-300"
                  )}
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}