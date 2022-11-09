import React, { useEffect } from "react";
import { gsap } from "gsap";

import Image from "next/image";
import kdan from "../../public/image/kdan.png";
import block from "../../public/image/block.png";
import titan from "../../public/image/titan.png";

export const Donated = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#donated",
        start: "top center+=200",
        end: "top top+=400",
        scrub: 1,
      },
      defaults: { duration: 10, ease: "sine" },
    });
    tl.fromTo("#block", { x: -1000 }, { x: 0 });
    tl.fromTo("#titan", { x: -1500 }, { x: 0 }, 2);
    tl.fromTo("#kdan", { x: -2000 }, { x: 0 }, 4);
  }, []);

  return (
    <div className="flex justify-center min-h-screen relative bg-[url('../public/image/brickWall.png')]">
      <div className="max-w-[1440px] w-full flex flex-col items-center pt-24 lg:pt-12 lg:pb-12">
        <h3 id="donated" className="text-white text-5xl mb-20">
          贊助單位
        </h3>
        <ul className="w-full flex justify-evenly lg:justify-between mb-28">
          <li id="block">
            <a href="https://blockstudio.tw/">
              <Image
                src={block}
                alt="block"
                className="w-28 h-28 lg:w-64 lg:h-64"
              />
            </a>
          </li>
          <li id="titan">
            <a href="https://titansoft.com/tw">
              <Image
                src={titan}
                alt="titan"
                className="w-28 h-28 lg:w-64 lg:h-64"
              />
            </a>
          </li>
          <li id="kdan">
            <a href="https://www.kdanmobile.com/zh-tw">
              <Image
                src={kdan}
                alt="kdan"
                className="w-28 h-28 lg:w-64 lg:h-64"
              />
            </a>
          </li>
        </ul>
        <a href="https://2022.thef2e.com/signup">
          <button
            type="button"
            className="border-8 border-solid border-[#FFBFFC] px-16 lg:px-36 py-10 lg:py-14 rounded-[20px] text-5xl h3 font-jf"
          >
            立即報名
          </button>
        </a>
      </div>
    </div>
  );
};

export default Donated;
