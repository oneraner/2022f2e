import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import cloud from "../../public/image/cloud.png";
import yellowStar from "../../public/image/yellowStar.svg";
import orangeStar from "../../public/image/orangeStar.svg";
import wall from "../../public/image/wall.png";
import lightWall from "../../public/image/lightWall.png";

export const ProblemSolving = () => {
  return (
    <div className="bg-[#061b34] flex justify-center h-screen relative overflow-hidden">
      <div className="max-w-[1440px] flex items-center flex-col pt-24">
        <div className="font-jf mb-10 h2 text-[#14153e] text-[3rem] flex items-end">
          年度最強合作，<span className="text-[4rem]">三大</span>主題來襲
        </div>
        <p className="text-white">
          各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
        </p>
        <Image src={wall} alt="wall" />
        <Image src={lightWall} alt="wall" className="absolute bottom-0" />
      </div>
      <Image
        src={yellowStar}
        alt="yellowStar"
        className="absolute top-14 left-0"
      />
      <Image src={orangeStar} alt="star" className="absolute top-44 -left-2" />
      <Image src={orangeStar} alt="star" className="absolute top-36 left-36" />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[248px] left-[180px]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-12 left-[20%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-36 left-[18%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-56 left-[24%]"
      />
      <Image
        src={cloud}
        alt="cloud"
        className="absolute top-[290px] left-36 text-[#EFEDED]"
      />
      <Image
        src={yellowStar}
        alt="yellowStar"
        className="absolute top-[5%] right-[5%] text-yellow-500"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[20%] right-[3%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[8%] right-[13%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[24%] right-[8%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[5%] right-[22%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[20%] right-[18%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[30%] right-[25%]"
      />
      <Image
        src={cloud}
        alt="cloud"
        className="absolute top-[220px] right-36 text-[#EFEDED]"
      />
    </div>
  );
};

export default ProblemSolving;
