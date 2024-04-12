import { useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoSlider: React.FC = () => {

  return (
    <>
      <div className="flex flex-col center w-screen gap-2 grayscale dark:hidden">
        <Marquee gradient={true} autoFill={true} pauseOnHover={true} gradientColor="rgb(249 250 251)">
              <Image src="/logos/24sata.png" alt="24sata logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/styria.png" alt="styria logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/klz.png" alt="klz logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/sost.png" alt="sost logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/dwarf.png" alt="dwarf logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/neuwaldegg.png" alt="Neuwaldegg logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/presse.png" alt="Presse logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/vecernji.png" alt="Vecernji logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/eden.png" alt="EdenSpiekerman logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/futter.png" alt="Futter logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
          </Marquee>
      </div>
      <div className="flex-col center w-screen gap-2 grayscale invert hidden dark:flex">
      <Marquee gradient={false} autoFill={true} pauseOnHover={true} gradientColor="#676394">
      <Image src="/logos/24sata.png" alt="24sata logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/styria.png" alt="styria logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/klz.png" alt="klz logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/sost.png" alt="sost logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/dwarf.png" alt="dwarf logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/neuwaldegg.png" alt="Neuwaldegg logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/presse.png" alt="Presse logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/vecernji.png" alt="Vecernji logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/eden.png" alt="EdenSpiekerman logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
              <Image src="/logos/futter.png" alt="Futter logo" width={100} height={100} className="ml-8 md:ml-20" loading="eager"/>
        </Marquee>
    </div>
    </>
  );
};

export default LogoSlider;