import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Banner from "../components/first/Banner";
import SumbitQuestion from "../components/first/SubmitQuestion";
import ProblemSolving from "../components/first/ProblemSolving";
import Solution from "../components/first/Solution";
import Description from "../components/first/Description";
import Game from "../components/first/Game";
import Question from "../components/first/Question";
import Donated from "../components/first/Donated";
import Footer from "../components/first/Footer";

export const Animation = () => {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Banner />
      <SumbitQuestion />
      <ProblemSolving />
      <Solution />
      <Description />
      <Game />
      <Question />
      <Donated />
      <Footer />
    </>
  );
};

export default Animation;
