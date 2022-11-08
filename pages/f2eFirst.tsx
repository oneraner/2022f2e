import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Banner from "../components/first/Banner";
import SumbitQuestion from "../components/first/SubmitQuestion";
import ProblemSolving from "../components/first/ProblemSolving";
import Solution from "../components/first/Solution";
import Description from "../components/first/Description";
import Game from "../components/first/Game";

export const Animation = () => {
  return (
    <>
      <Banner />
      <SumbitQuestion />
      <ProblemSolving />
      <Solution />
      <Description />
      <Game/>
    </>
  );
};

export default Animation;
