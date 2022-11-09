import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import board from "../../public/image/board.png";
import lightning from "../../public/image/lightning.png";
import light from "../../public/image/light.png";

export const Banner = () => {
  useEffect(() => {
    const h1 = gsap.timeline({ duration: 1, repeat: -1, yoyo: true });
    h1.to(".h1", {
      textShadow: `0 0 10px #eefbff, 0 0 10px #eefbff, 0 0 10px #eefbff,
          0 0 10px #eefbff`,
    });
    h1.to(".h1", {
      textShadow: `0 0 20px #eefbff, 0 0 20px #eefbff, 0 0 20px #eefbff,
          0 0 20px #eefbff`,
    });
    const h3 = gsap.timeline({ duration: 1, repeat: -1, yoyo: true });
    h3.to(".h3", {
      textShadow: `0 0 10px #fdffa9, 0 0 10px #fdffa9, 0 0 10px #fdffa9,
            0 0 10px #fdffa9`,
    });
    h3.to(".h3", {
      textShadow: `0 0 20px #fdffa9, 0 0 20px #fdffa9, 0 0 20px #fdffa9,
            0 0 20px #fdffa9`,
    });
  }, []);

  return (
    <div className="radial-gradient flex justify-center lg:pt-20 min-h-screen">
      <div className="max-w-[1440px] flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col justify-center items-center lg:w-1/2 relative mb-7 lg:mb-0">
          <h1 className="text-5xl lg:text-[6rem] font-jf mb-10 h1 relative text-[#14153e]">
            The F2E 4th
          </h1>
          <h3 className="font-jf mb-10 h3 text-[#504552] text-4xl lg:text-[4rem]">
            互動網頁設計
          </h3>
          <div className="text-white flex flex-col justify-center items-center">
            <p>UI 設計師 x 前端工程師最強合作，</p>
            <p>三大主題來襲網頁互動關卡</p>
            <p>等你來挑戰 !</p>
          </div>
          <Image
            src={lightning}
            alt="lightning"
            className="absolute top-[-15%] lg:top-[20%] left-0 w-12 lg:w-16 h-16 lg:h-24"
          />
          <Image src={light} alt="light" className="hidden lg:block absolute top-[20%] -right-4" />
          <Image
            src={lightning}
            alt="lightning"
            className="absolute bottom-[30%] lg:bottom-[20%] right-[5%] lg:right-0 w-12 lg:w-16 h-16 lg:h-24"
          />
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <Image src={board} alt="board" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
