import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import wave from "../../public/image/wave.png";
import eye from "../../public/image/eye.png";
import moreStar from "../../public/image/moreStar.png";
import joystick from "../../public/image/joystick.png";
import blub from "../../public/image/blub.png";
import tree from "../../public/image/tree.png";
import right_circle from "../../public/image/right_circle.svg";
import left_circle from "../../public/image/left_circle.svg";

export const SumbitQuestion = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#question",
        start: "top center",
        end: "top top+=200",
        scrub: 1,
      },
      defaults: { duration: 20 },
    });
    tl.fromTo("#animation", { opacity: 0 }, { opacity: 1 });
    tl.fromTo("#wish", { opacity: 0 }, { opacity: 1, delay: 5 });
    tl.fromTo("#tree", { opacity: 0 }, { opacity: 1, delay: 10 });
  }, []);
  return (
    <div className="bg-[#061b34] flex justify-center h-screen relative overflow-hidden">
      <div className="max-w-[1440px] flex justify-center items-center flex-col pt-12">
        <h3 id="question" className="font-jf mb-10 h3 text-[#14153e] text-[3rem] flex items-center">
          <Image src={eye} alt="eye" className="mr-4" />
          你是否也有以下困擾
        </h3>
        <ul className="flex justify-evenly w-screen max-w-[1440px] px-20">
          <li id="animation" className="flex flex-col items-center">
            <div className="mb-4 relative bg-[#142C48]">
              <Image src={wave} alt="wave" />
              <span className="absolute -top-10 -left-16 text-9xl card__number font-jf">
                1
              </span>
              <Image
                src={moreStar}
                alt="moreStar"
                className="absolute top-5 right-3"
              />
              <Image
                src={joystick}
                alt="joystick"
                className="absolute bottom-0 left-10"
              />
            </div>
            <p className="text-white">羨慕別人的酷酷網頁動畫</p>
          </li>
          <li id="wish" className="flex flex-col items-center mt-[5%]">
            <div className="mb-4 relative bg-[#142C48]">
              <Image src={wave} alt="wave" />
              <span className="absolute -top-10 -left-16 text-9xl card__number font-jf">
                2
              </span>
              <Image src={blub} alt="blub" className="absolute top-14 left-2" />
            </div>
            <p className="text-white">滿足不了同事的許願</p>{" "}
          </li>
          <li id="tree" className="flex flex-col items-center mt-[15%]">
            <div className="mb-4 relative bg-[#142C48]">
              <Image src={wave} alt="wave" />
              <span className="absolute -top-10 -left-16 text-9xl card__number font-jf">
                3
              </span>
              <Image src={tree} alt="tree" className="absolute top-24 left-5" />
              <span className="font-jf text-[#FDFFA9] text-5xl absolute top-5 right-5 rotate-[20deg]">
                ?
              </span>
            </div>
            <p className="text-white">動畫技能樹太雜無從下手</p>
          </li>
        </ul>
        <a href="https://2022.thef2e.com/signup">
          <button
            type="button"
            className="absolute right-8 top-[40%] rounded-full border-[#9AFFFF] border-4 bg-[#325f71] border-solid w-[150px] h-[150px]"
          >
            <span className="text-3xl font-jf text-[#FDFFA9] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16">
              立即報名
            </span>
          </button>
        </a>
      </div>
      <Image
        src={right_circle}
        alt="right_circle"
        className="absolute -top-[20%] -left-[5%] text-[#EFEDED]"
      />
      <Image
        src={left_circle}
        alt="left_circle"
        className="absolute -bottom-[15%] -right-14 text-[#EFEDED]"
      />
    </div>
  );
};

export default SumbitQuestion;
