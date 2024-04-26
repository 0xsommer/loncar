"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { BsList, BsXLg } from "react-icons/bs";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false); // Add state

  const toggleNav = () => {
    setIsOpen(!isOpen); // Toggle state on button click
  };

  return (
    <>
      <button
        onClick={toggleNav} // Add click handler
        className="md:hidden fixed bottom-4 right-4 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-200 dark:border-gray-100/50 shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition-all dark:bg-gray-950 cursor-pointer z-50"
      >
        {isOpen ? <BsXLg /> : <BsList />} {/* Conditionally render icon */}
      </button>
      {isOpen && ( // Conditionally render navigation
        <nav className="fixed bottom-0 pb-20 right-2 flex h-min p-2 w-full justify-end sm:py-0 z-40">
          <ul className="flex w-min flex-col items-end justify-end font-medium text-gray-500 gap-3">
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