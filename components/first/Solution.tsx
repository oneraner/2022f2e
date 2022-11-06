import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import brickWall from "../../public/image/brickWall.png";

export const Solution = () => {
  return (
    <div className="flex justify-center h-screen relative overflow-hidden bg-[url('../public/image/brickWall.png')]">
      <div className="max-w-[1440px] flex justify-center items-center flex-col pt-12"></div>
    </div>
  );
};

export default Solution;
