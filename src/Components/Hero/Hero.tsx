import React from "react";
import { PseudoFigure, Figure } from "../Layouts";
import HeroDetails from "./HeroDetails";

const Hero: React.FC = () => {
  return (
    <section className="mt-12">
      <div className="container flex flex-col tablet:flex-row gap-2">
        <div className="flex-1 order-2 mt-16 flex justify-center items-center tablet:max-w-1/2 tablet:mt-0 tablet:order-1">
          <HeroDetails />
        </div>
        <div className="relative order-1 flex-1 tablet:max-w-1/2 tablet:order-2">
          <Figure
            src="/assets/illustration-hero.svg"
            alt="illustration hero"
            className="max-w-80 mx-auto h-[max-content] tablet:-ml-8"
          />
          <PseudoFigure position="right" className="max-w-85" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
