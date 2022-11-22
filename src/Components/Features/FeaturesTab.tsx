import React from "react";
import { Heading, Text, Button, PseudoFigure, Figure } from "../Layouts";

interface FeaturesTabType {
  activeFeature: {
    img: string;
    title: string;
    description: string;
  };
}

const FeaturesTab: React.FC<FeaturesTabType> = ({ activeFeature }) => {
  return (
    <div className="flex flex-col gap-4 tablet:h-[35vw] tablet:flex-row tablet:mt-10">
      <div className="relative flex-1 tablet:max-w-1/2">
        <Figure
          src={activeFeature.img}
          className="max-w-80 mx-auto h-[max-content] tablet:ml-auto"
          alt="illustration features"
        />
        <PseudoFigure position="left" className="max-w-85" />
      </div>
      <div className="flex-1 flex justify-center items-center mt-16 tablet:mt-0 tablet:max-w-1/2">
        <div className="h-[max-content] flex flex-col items-center gap-6 tablet:items-start tablet:w-9/12">
          <Heading mode="h2" value={activeFeature.title} />
          <Text>{activeFeature.description}</Text>
          <Button cl="blue" value="more info" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesTab;
