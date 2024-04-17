"use client"

import { BsArrowLeft } from "react-icons/bs";
import React from "react";
import { usePathname, useRouter } from 'next/navigation'

export default function BackButton() {
  const pathname = usePathname()
  const router = useRouter()


  // Don't render the button if we're on the home page
  if (pathname === '/') {
    return null;
  }

  return (
    <button
      className="fixed top-4 left-4 md:top-6 md:left-8 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-100 dark:border-gray-100/30 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 cursor-pointer"
      onClick={() => router.push('/')}
    >
      <BsArrowLeft />
    </button>
  );
}