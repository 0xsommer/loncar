"use client"

import React, { useEffect, useRef } from 'react';

const Blob = () => {
  useEffect(() => {
    const updateCursor = function (e: MouseEvent) {
      const posX = e.clientX;
      const posY = e.clientY;
  
      const cursorOutline = document.querySelector("[data-cursor-outline]");
  
      cursorOutline?.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 4000, fill: "forwards" });
    };
  
    window.addEventListener("mousemove", updateCursor);
  
    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <div className="fixed hidden md:block w-screen h-screen overflow-hidden -z-10">
      <div className="blur"></div>
      <div 
      data-cursor-outline
      className="blob w-[35vw] aspect-square absolute left-1/2 top-1/2 opacity-60"></div>
    </div>
  );
};

export default Blob;
