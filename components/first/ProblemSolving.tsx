import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import cloud from "../../public/image/cloud.png";
import yellowStar from "../../public/image/yellowStar.svg";
import orangeStar from "../../public/image/orangeStar.svg";
import wall from "../../public/image/wall.png";
import lightWall from "../../public/image/lightWall.png";

export const ProblemSolving = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#problem",
        start: "top center+=200",
        end: "top top+=200",
        scrub: 1,
      },
      defaults: { duration: 10, ease: "sine" },
    });
    tl.fromTo("#wall", { y: 1000 }, { y: 0 });
  }, []);
  return (
    <div className="bg-[#061b34] flex justify-center lg:h-screen relative overflow-hidden">
      <div className="max-w-[1440px] flex items-center justify-between flex-col pt-12 lg:pt-24">
        <h3 id="problem" className="font-jf mb-10 h3 text-[#14153e] text-2xl lg:text-[3rem] flex items-end">
          年度最強合作，<span className="text-3xl lg:text-[4rem]">三大</span>主題來襲
        </h3>
        <p className="text-white font-jf text-xl lg:text-base mx-10 lg:mx-0 mb-36 lg:mb-0">
          各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
        </p>
        <Image src={wall} alt="wall"/>
        <Image id="wall" src={lightWall} alt="wall" className="absolute left-0 bottom-0" />
      </div>
      <Image
        src={yellowStar}
        alt="yellowStar"
        className="hidden lg:block absolute top-14 left-0"
      />
      <Image src={orangeStar} alt="star" className="absolute top-[35%] lg:top-44 -right-4 lg:-left-2" />
      <Image src={orangeStar} alt="star" className="absolute top-[50%] lg:top-36 right-[15%] lg:left-36" />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[20%] lg:top-[248px] left-0 lg:left-[180px]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="hidden lg:block absolute top-12 left-[20%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[40%] lg:top-36 -left-4 lg:left-[18%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[60%] lg:top-56 left-[20%] lg:left-[24%]"
      />
      <Image
        src={cloud}
        alt="cloud"
        className="absolute top-[45%] lg:top-[290px] left-[3%] lg:left-36 w-12 lg:w-32 h-7 lg:h-16 text-[#EFEDED]"
      />
      <Image
        src={yellowStar}
        alt="yellowStar"
        className="hidden lg:block absolute top-[5%] right-[5%] text-yellow-500"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="absolute top-[20%] right-[3%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="hidden lg:block absolute top-[8%] right-[13%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="hidden lg:block absolute top-[24%] right-[8%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="hidden lg:block absolute top-[5%] right-[22%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="hidden lg:block absolute top-[20%] right-[18%]"
      />
      <Image
        src={orangeStar}
        alt="star"
        className="hidden lg:block absolute top-[30%] right-[25%]"
      />
      <Image
        src={cloud}
        alt="cloud"
        className="absolute top-[60%] lg:top-[220px] right-[5%] lg:right-36 w-12 lg:w-32 h-7 lg:h-16 text-[#EFEDED]"
      />
    </div>
  );
};

export default ProblemSolving;
