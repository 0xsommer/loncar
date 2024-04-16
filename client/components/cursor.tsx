"use client"

import React, { useEffect, useState } from 'react';

const Cursor = () => {

  useEffect(() => {
    const updateCursor = function (e: MouseEvent) {
      const posX = e.clientX;
      const posY = e.clientY;
  
      const cursorDot = document.querySelector("[data-cursor-dot]");
      const cursorOutline = document.querySelector("[data-cursor-outline]");
  
      if (cursorDot) {
        (cursorDot as HTMLElement).style.left = `${posX}px`;
        (cursorDot as HTMLElement).style.top = `${posY}px`;
      }
  
      cursorOutline?.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 800, fill: "forwards", easing: "ease-out" });
    };
  
    window.addEventListener("mousemove", updateCursor);
  
    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <>
      <div
        className="hidden md:block fixed top-0 left-0 z-[9999] rounded-full !w-5 !h-5 bg-gray-700 dark:bg-gray-400 pointer-events-none"
        data-cursor-dot
        style={{
          transform: `translate(-50%, -50%)`,
        }}
      >
      </div>
      <div
        data-cursor-outline
        className="hidden md:block fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full border-2 border-gray-700 dark:border-gray-400 pointer-events-none bg-transparent"
        style={{
          transform: `translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default Cursor;
