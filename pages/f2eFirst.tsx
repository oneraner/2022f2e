import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Banner from "../components/first/Banner";
import SumbitQuestion from "../components/first/SubmitQuestion";
import ProblemSolving from "../components/first/ProblemSolving";
import Solution from "../components/first/Solution";

export const Animation = () => {
  return (
    <>
      <Banner />
      <SumbitQuestion />
      <ProblemSolving />
      <Solution />
    </>
  );
};

export default Animation;
